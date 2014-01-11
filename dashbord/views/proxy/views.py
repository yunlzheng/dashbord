# coding: utf-8
import json
import pickle
import requests
from requests.api import request as do_request
from flask import Blueprint
from flask import request
from flask import jsonify
from flask.ext.login import login_required
from dashbord import signals
from dashbord.config import global_config
from dashbord.extensions import redis_store
from dashbord.clients.vms_client import Client
from dashbord.tasks import *

config = global_config()
api_proxy = Blueprint('api', __name__)

client = Client(config.VMS_HOST, config.VMS_PORT, config.VMS_APP_KEY,
                config.VMS_SECRET)

@api_proxy.route('/v1/<resources>', methods=['GET'])
@api_proxy.route('/v1.1/<resources>', methods=['GET'])
@api_proxy.route('/v1/<resources>/<resource_uuid>', methods=['GET'])
@api_proxy.route('/v1.1/<resources>/<resource_uuid>', methods=['GET'])
@login_required
def get_resources(resources, resource_uuid=None):

    key = ":".join(request.path.split("/"))[1:]
    print "load redis data by key[{0}]".format(key)
    result = redis_store.get(key)

    if not result:
        url = config.vms_http_url() + request.path + '?' + request.query_string
        print url
        resp = requests.get(url=url, headers=build_headers(), timeout=100)
        if resp.status_code == requests.codes.ok:
            redis_store.set(key, pickle.dumps(resp.json()))
            return jsonify(resp.json())
        else:
            return jsonify({
                'code': 1,
                'message': 'building! get resouces from cache',
                'data': {}
            })
    else:
        result = pickle.loads(result)
        return jsonify(result)


@api_proxy.route('/v1/<resources>', methods=['POST', 'PUT', 'DELETE'])
@api_proxy.route('/v1.1/<resources>', methods=['POST', 'PUT', 'DELETE'])
@api_proxy.route('/v1/<resources>/<resource_uuid>', methods=['POST', 'PUT', 'DELETE'])
@api_proxy.route('/v1.1/<resources>/<resource_uuid>', methods=['POST', 'PUT', 'DELETE'])
@login_required
def proxy(resources, resource_uuid=None):
    signals.resources_updated.send(resources)

    headers = build_headers()
    path = request.path
    method = request.method
    query_string = request.query_string
    data = json.dumps(request.json)
    url = config.vms_http_url() + path + query_string

    resp = do_request(method, url=url, data=data, headers=headers)

    if resp.status_code == requests.codes.ok:
        signals.resources_updated.send(resources)
        return jsonify(resp.json())
    elif resp.status_code == 401:
        client.authenticate()
        return jsonify({
            'code': 1,
            'message': '获取数据异常，请刷新重试'
        })
    else:
        return jsonify({
            'code': 2,
            'message': 'api timeout'
        })


def build_headers():
    return {
        'X-Consumer-key': config.VMS_APP_KEY,
        'X-Auth-Token': client.authenticate(),
    }

# ------------- SIGNALS ----------------#

def update_resources_cache(resources):
    # TODO： update data cache
    print "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"
    print 'recive resources[{0}] update signal'.format(resources)
    update_flovar_cache.delay()
    print "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"


signals.resources_updated.connect(update_resources_cache)
