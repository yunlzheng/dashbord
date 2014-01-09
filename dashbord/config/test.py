# coding: utf-8

from dashbord.config.base import Config

class Test(Config):
    TESTING = True

    # 云数据测试联调环境配置
    VMS_HOST = '172.30.1.12'
    VMS_PORT = 8889
    VMS_APP_KEY = '1386559196'
    VMS_PLATFORM_ID = '1'
    VMS_SECRET = '4ae0214d25f04007932997f3455c0c9f'
    VMS_ACCESS_TOKEN = None