# coding: utf-8
import requests
from dashbord.error import AuthTimeOut, AuthException
from dashbord.extensions import redis_store

class Client(object):
    def __init__(self, host, port):
        self.host = host
        self.port = port

    def _vms_authenticate(self, app_key, app_secret):
        HEADERS = {
            'X-Consumer-Key': app_key,
            'X-Consumer-Secret': app_secret
        }
        authenticate_url = 'http://{0}:{1}/auth/token?grant_type=authorization_code'.format(self.host, self.port)

        print "request auth url {0}".format(authenticate_url)
        print "with header {0}".format(HEADERS)

        resp = requests.get(authenticate_url, headers=HEADERS, timeout=2)
        if resp.status_code == requests.codes.ok:
            result = resp.json()
            print "get response {0}".format(result)
            if result['code'] == '0':
                return result['token']['id']
            else:
                raise AuthException()
        else:
            raise AuthTimeOut()

    def authenticate(self, app_key, app_secret, refresh_token=False):

        store_key = 'token:'+app_key
        redis_store.set(app_key+":secret", app_secret);
        if not redis_store.get(store_key):
            token = self._vms_authenticate(app_key, app_secret)
            redis_store.set(store_key, token)
        if refresh_token:
            token = self._vms_authenticate(app_key, app_secret)
            redis_store.set(store_key, token)
        return redis_store.get(store_key)