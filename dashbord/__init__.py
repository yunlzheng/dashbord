# coding: utf-8
'''
Flask with Angular.js fix the web app url mapping
, in order to save the yeoman way of web front develop way
'''
from flask import Flask
import importlib

from dashbord.config import global_config
from dashbord.proxy.views import api_proxy
from dashbord.angular.views import angular
from dashbord.clients.vms_client import Client
from dashbord.commons import cache
from dashbord.commons import redis_store
from dashbord.commons import configure_logging

__all__ = ["create_app"]

DEFAULT_APP_NAME = 'Dashbord'

BLUEPRINTS = [
     ("dashbord.angular.views", 'angular'),
     ("dashbord.proxy.views",'api_proxy' ,'/v1'),
     ("dashbord.proxy.views",'api_proxy', '/v1.1')
]

def create_app(appname=None):
    if not appname:
        appname = DEFAULT_APP_NAME
    app = Flask(appname)
    configure_app(app)
    configure_app_jinja(app)
    registe_blueprint(app)
    configure_extensions(app)
    configure_logging(app)
    return app

def configure_app(app):
    app.config.from_object(global_config())

def configure_app_jinja(app):
    app.jinja_env.variable_start_string = '[['
    app.jinja_env.variable_end_string = ']]'

def configure_extensions(app):
    redis_store.app = app
    redis_store.init_app(app)

def registe_blueprint(app):
    for blueprint in BLUEPRINTS:
        __register_blueprint(app, blueprint)

def __register_blueprint(app, blueprint):
    package = blueprint[0]
    name = ''
    url_prefix = None
    if len(blueprint) >= 2:
        name = str(blueprint[1])
    if len(blueprint)>=3:
        url_prefix = str(blueprint[2])

    #print blueprint[2]
    try:
        package = importlib.import_module(package)
    except Exception as ex:
        raise
    else:
        bp = getattr(package, name, None)
        if not bp:
            app.logger.error("import blueprint %s from %s failed!\n" %(name, package+".views"))
            raise

    if url_prefix:
        if not url_prefix.startswith("/"):
            url_prefix = "/" + url_prefix
        app.register_blueprint(bp, url_prefix=url_prefix)
    else:
        app.register_blueprint(bp)


