# coding: utf-8
import json
import requests
from requests.api import request as do_request
from flask import Blueprint
from flask import request
from flask import jsonify


from dashbord.config import global_config
from dashbord.clients.vms_client import Client

config = global_config()
api_proxy = Blueprint('api_v1', __name__)

client = Client(config.VMS_HOST, config.VMS_PORT, config.VMS_APP_KEY,
                               config.VMS_SECRET)

@api_proxy.route('/<resources>', methods=['GET'])
def get_resources(resources):
    # return jsonify({
    #     'code': 1,
    #     'message': 'building! get resouces from cache',
    #     'data': {}
    # })
    url = config.vms_http_url() + request.path + '?' +request.query_string
    print url
    resp = requests.get( url = url, headers = build_headers())
    print resp.status_code
    if resp.status_code == requests.codes.ok:
        return jsonify(resp.json())
    else:
        return jsonify({
            'code': 1,
            'message': 'building! get resouces from cache',
            'data': {}
        })

@api_proxy.route('/<resources>', methods=['POST', 'PUT', 'DELETE'])
def proxy(resources):
    headers = build_headers()
    print headers
    path = request.path
    method = request.method
    query_string = request.query_string
    data = json.dumps(request.json)
    url = config.vms_http_url() + path + query_string

    resp = do_request(method, url=url, data=data, headers=headers)

    if resp.status_code == requests.codes.ok:
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
