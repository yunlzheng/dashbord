# coding: utf-8
import requests
from dashbord.exceptions import AuthTimeOut, AuthException

class Client(object):

    _ACCESS_TOKEN = None

    def __init__(self, host, port, key, secret):
        self.host = host
        self.port = port
        self.app_key = key
        self.app_secret = secret

    def _vms_authenticate(self):
        HEADERS = {
            'X-Consumer-key': self.app_key,
            'X-Consumer-Secret': self.app_secret
        }
        authenticate_url = 'http://{0}:{1}/auth/token?grant_type=authorization_code'.format(self.host, self.port)
        resp = requests.get(authenticate_url, headers=HEADERS)
        if resp.status_code == requests.codes.ok:
            result = resp.json()
            if result['code'] == '0':
                return result['token']['id']
            else:
                raise AuthException()
        else:
            raise AuthTimeOut()

    def authenticate(self):
        # TODO: vms多平台支持，按照平台信息保存各个平台的认证信息
        # TODO: 认证后将获取到得认证信息保存到redis缓存中，此处判断缓存中是否有相应的认证信息
        if not self._ACCESS_TOKEN:
            self._ACCESS_TOKEN = self._vms_authenticate()
        return self._ACCESS_TOKEN

if __name__ == '__main__':
    print Client('172.30.1.12',8889, '1386559196', '4ae0214d25f04007932997f3455c0c9f').authenticate();