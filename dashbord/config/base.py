# coding: utf-8
from os.path import dirname, abspath, join

# 配置文件路径
CONF_DIR = dirname(abspath(__file__))
# Python源代码路径
SRC_DIR = dirname(CONF_DIR)
# 项目根路径
PROJECT_DIR = dirname(SRC_DIR)
# 前端.tmp文件路径
ANGULAR_DEV_DIR = join(PROJECT_DIR, '.tmp')
# 前端app文件路径
ANGULAR_APP_DIR = join(PROJECT_DIR, 'app')


class Config(object):
    DEBUG = True
    TESTING = False
    SECRET_KEY = 'dashbord-secret-key'

    # Log configurtaion
    DEBUG_LOG = 'logs/debug.log'
    ERROR_LOG = 'logs/error.log'

    INDEX_ROOT = (lambda debug:debug and join(ANGULAR_DEV_DIR, 'index.html') or join(ANGULAR_APP_DIR, 'index.html'))(DEBUG)
    VIEWS_ROOT = (lambda debug:debug and join(ANGULAR_DEV_DIR, 'views') or join(ANGULAR_APP_DIR, 'views'))(DEBUG)
    STYLE_ROOT = (lambda debug:debug and join(ANGULAR_DEV_DIR, 'styles') or join(ANGULAR_APP_DIR, 'styles'))(DEBUG)
    BOWER_COMPONENTS_ROOT = (lambda debug:debug and join(ANGULAR_APP_DIR, 'bower_components') or join(ANGULAR_APP_DIR,
                                                                                        'bower_components'))(DEBUG)
    IMAGES_ROOT = (lambda debug:debug and join(ANGULAR_APP_DIR, 'images') or join(ANGULAR_APP_DIR, 'images'))(DEBUG)
    TEMPLATE_ROOT = (lambda debug:debug and join(ANGULAR_APP_DIR, 'template') or join(ANGULAR_APP_DIR, 'template'))(DEBUG)

    SCRIPTS_ROOT = join(ANGULAR_APP_DIR, 'scripts')

    # Database Config
    SQLALCHEMY_DATABASE_URI = "sqlite:///dashbord.db"
    SQLALCHEMY_ECHO = False

    # Reds Configuration
    REDIS_HOST = "127.0.0.1"
    REDIS_PASSWORD = ""
    REDIS_PORT = 6379
    REDIS_DATABASE = 1

    # Celery configuration
    BROKER_URL = 'redis://127.0.0.1:6379'
    CELERY_TASK_SERIALIZER = 'json'
    CELERY_RESULT_SERIALIZER = 'json'
    CELERY_ACCEPT_CONTENT = ['json']
    CELERY_TIMEZONE = 'Europe/Oslo'
    CELERY_ENABLE_UTC = True

    #Cache configuration
    CACHE_TYPE = "simple"
    CACHE_DEFAULT_TIMEOUT = 300

    VMS_HOST = '172.30.1.12'
    VMS_PORT = 8889
    VMS_APP_KEY = '1386559196'
    VMS_SECRET = '4ae0214d25f04007932997f3455c0c9'

    VMS_HTTP_URL = 'http://{0}:{1}'.format(VMS_HOST, VMS_PORT)
