# coding: utf-8
import json
import pickle
import requests
import urllib
from requests.api import request as do_request
from flask import Blueprint
from flask import request
from flask import jsonify
from flask.ext.login import login_required
from dashbord import signals
from dashbord.config import global_config
from dashbord.clients.vms_client import Client
from dashbord.tasks import *

config = global_config()
api_proxy = Blueprint('api', __name__)

client = Client(config.VMS_HOST, config.VMS_PORT)


@api_proxy.route('/v1/<resources>', methods=['GET'])
@api_proxy.route('/v1.1/<resources>', methods=['GET'])
@api_proxy.route('/v1/<resources>/<resource_uuid>', methods=['GET'])
@api_proxy.route('/v1.1/<resources>/<resource_uuid>', methods=['GET'])
@login_required
def get_resources(resources, resource_uuid=None):
    app_key = urllib.unquote(
        request.cookies.get(
            'appkey',
            global_config().VMS_APP_KEY
        )
    ).decode('utf8').replace('"', '')
    secret = urllib.unquote(
        request.cookies.get(
            'secret',
            global_config().VMS_SECRET
        )
    ).decode('utf8').replace('"', '')

    request_key = ":".join(request.path.split("/"))
    store_key = app_key + request_key
    print "load redis data by key[{0}]".format(store_key)
    result = redis_store.get(store_key)

    #result = None

    if not result:
        url = config.vms_http_url() + request.path + '?' + request.query_string
        resp = requests.get(url=url, headers=build_headers(app_key, secret), timeout=100)
        if resp.status_code == requests.codes.ok:
            redis_store.set(store_key, pickle.dumps(resp.json()))
            return jsonify(resp.json())
        elif resp.status_code == 401:
            client.authenticate(app_key, secret, True)
            return jsonify({
                'code': 1,
                'message': '获取数据异常，请刷新重试'
            })
        else:
            return jsonify({
                'code': 1,
                'message': 'building! get resouces from cache',
                'data': {}
            })
    else:
        result = pickle.loads(result)
        return jsonify(result)


@api_proxy.route('/v1/<resources>',
                 methods=['POST', 'PUT', 'DELETE'])
@api_proxy.route('/v1.1/<resources>',
                 methods=['POST', 'PUT', 'DELETE'])
@api_proxy.route('/v1/<resources>/<resource_uuid>',
                 methods=['POST', 'PUT', 'DELETE'])
@api_proxy.route('/v1.1/<resources>/<resource_uuid>',
                 methods=['POST', 'PUT', 'DELETE'])
@login_required
def proxy(resources, resource_uuid=None):
    app_key = urllib.unquote(
        request.cookies.get(
            'appkey',
            global_config().VMS_APP_KEY
        )
    ).decode('utf8').replace('"', '')
    secret = urllib.unquote(
        request.cookies.get(
            'secret',
            global_config().VMS_SECRET
        )
    ).decode('utf8').replace('"', '')

    signals.resources_updated.send(resources)
    headers = build_headers(app_key, secret)
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
        client.authenticate(app_key, secret, True)
        return jsonify({
            'code': 1,
            'message': '获取数据异常，请刷新重试'
        })
    else:
        return jsonify({
            'code': 2,
            'message': 'api timeout'
        })


def build_headers(app_key, app_secret):
    return {
        'X-Consumer-Key': app_key,
        'X-Auth-Token': client.authenticate(app_key, app_secret),
    }

# ------------- SIGNALS ----------------#

def update_resources_cache(resources):
    # TODO： update data cache

    print '@@ recive resources[{0}] update signal'.format(resources)
    update_flovar_cache.delay()


signals.resources_updated.connect(update_resources_cache)
