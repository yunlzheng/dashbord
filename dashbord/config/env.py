# coding: utf-8
from os.path import dirname, abspath, join

CONF_DIR = dirname(abspath(__file__))
SRC_DIR = dirname(CONF_DIR)
PROJECT_DIR = dirname(SRC_DIR)
ANGULAR_DEV_DIR = join(PROJECT_DIR, '.tmp')
ANGULAR_APP_DIR = join(PROJECT_DIR, 'app')