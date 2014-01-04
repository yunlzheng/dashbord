# coding: utf-8

from . import Config

class Production(Config):
    DATABASE_URI = 'mysql://user@localhost/foo'
    VIEWS_ROOT = '../app/views'
    STYLE_ROOT = '../app/styles'