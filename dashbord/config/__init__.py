# coding: utf-8

class Config(object):
    DEBUG = False
    TESTING = False
    DATABASE_URI = 'sqlite://:memory:'

    INDEX_ROOT = '.tmp/index.html' 
    VIEWS_ROOT = '.tmp/views'
    STYLE_ROOT = '.tmp/styles'
    SCRIPTS_ROOT = 'app/scripts'
    BOWER_COMPONENTS_ROOT = 'app/bower_components'
    IMAGES_ROOT = 'app/images'
    TEMPLATE_ROOT = 'app/template'

    VMS_HOST = '172.30.1.12'
    VMS_PORT = 8889
    VMS_PLATFORM_ID = '1386559196'
    VMS_SECRET = '4ae0214d25f04007932997f3455c0c9f'