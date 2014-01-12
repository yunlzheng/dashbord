# coding: utf-8
from os.path import join
from dashbord.config.base import Config
from dashbord.config.base import ANGULAR_APP_DIR


class Production(Config):
    DATABASE_URI = 'mysql://user@localhost/foo'
    # Angular Configuration
    INDEX_ROOT = join(ANGULAR_APP_DIR, 'index.html')
    VIEWS_ROOT = join(ANGULAR_APP_DIR, 'views')
    STYLE_ROOT = join(ANGULAR_APP_DIR, 'styles')
    SCRIPTS_ROOT = join(ANGULAR_APP_DIR, 'scripts')
    BOWER_COMPONENTS_ROOT = join(ANGULAR_APP_DIR, 'bower_components')
    IMAGES_ROOT = join(ANGULAR_APP_DIR, 'images')
    TEMPLATE_ROOT = join(ANGULAR_APP_DIR, 'template')