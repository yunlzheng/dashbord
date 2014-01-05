# coding: utf-8
from os.path import join
from dashbord.config.env import ANGULAR_APP_DIR
from dashbord.config.env import ANGULAR_DEV_DIR

class Config(object):
    DEBUG = False
    TESTING = False
    DATABASE_URI = 'sqlite://:memory:'

    INDEX_ROOT = join(ANGULAR_DEV_DIR, 'index.html')
    VIEWS_ROOT = join(ANGULAR_DEV_DIR, 'views')
    STYLE_ROOT = join(ANGULAR_DEV_DIR, 'styles')
    SCRIPTS_ROOT = join(ANGULAR_APP_DIR, 'scripts')
    BOWER_COMPONENTS_ROOT = join(ANGULAR_APP_DIR, 'bower_components')
    IMAGES_ROOT = join(ANGULAR_APP_DIR, 'images')
    TEMPLATE_ROOT = join(ANGULAR_APP_DIR, 'template')

    VMS_HOST = '172.30.1.12'
    VMS_PORT = 8889
    VMS_PLATFORM_ID = '1386559196'
    VMS_SECRET = '4ae0214d25f04007932997f3455c0c9f'
    VMS_ACCESS_TOKEN = None

    @classmethod
    def vms_http_url(cls):
        http_url = 'http://{0}:{1}'.format(cls.VMS_HOST, cls.VMS_PORT)
        return http_url