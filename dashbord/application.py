# coding: utf-8
'''
Flask with Angular.js fix the web app url mapping
, in order to save the yeoman way of web front develop way
'''
import os
import logging

from logging.handlers import SMTPHandler, RotatingFileHandler
from flask import Flask, request, jsonify
from flask import render_template
import importlib

from dashbord.config import global_config
from dashbord.extensions import redis_store

__all__ = ["create_app"]

DEFAULT_APP_NAME = 'Dashbord'

BLUEPRINTS = [
    ("dashbord.angular.views", 'angular'),
    ("dashbord.proxy.views", 'api_proxy', '/v1'),
    ("dashbord.proxy.views", 'api_proxy', '/v1.1')
]


def create_app(command, appname=None):
    if not appname:
        appname = DEFAULT_APP_NAME
    app = Flask(appname)
    configure_app(app, command)

    configure_logging(app)
    configure_app_jinja(app)
    configure_errorhandlers
    configure_extensions(app)
    registe_blueprint(app)
    return app


def configure_app(app, command):
    os.environ['DASHBORD_CONF'] = command
    app.config.from_object(global_config())


def configure_app_jinja(app):
    app.jinja_env.variable_start_string = '[['
    app.jinja_env.variable_end_string = ']]'


def configure_extensions(app):
    try:
        redis_store.app = app
        redis_store.init_app(app)
    except Exception as ex:
        raise;


def registe_blueprint(app):
    for blueprint in BLUEPRINTS:
        __register_blueprint(app, blueprint)


def __register_blueprint(app, blueprint):
    package = blueprint[0]
    name = ''
    url_prefix = None
    if len(blueprint) >= 2:
        name = str(blueprint[1])
    if len(blueprint) >= 3:
        url_prefix = str(blueprint[2])

    #print blueprint[2]
    try:
        package = importlib.import_module(package)
    except Exception as ex:
        raise
    else:
        bp = getattr(package, name, None)
        if not bp:
            app.logger.error("import blueprint %s from %s failed!\n" % (name, package + ".views"))
            raise

    if url_prefix:
        if not url_prefix.startswith("/"):
            url_prefix = "/" + url_prefix
        app.register_blueprint(bp, url_prefix=url_prefix)
    else:
        app.register_blueprint(bp)

def configure_errorhandlers(app):

    if app.testing:
        return

    @app.errorhandler(404)
    def page_not_found(error):
        if request.is_xhr:
            return jsonify('Sorry, page not found')
        return render_template("errors/404.html", error=error)

    @app.errorhandler(403)
    def forbidden(error):
        if request.is_xhr:
            return jsonify('Sorry, not allowed')
        return render_template("errors/403.html", error=error)

    @app.errorhandler(500)
    def server_error(error):
        if request.is_xhr:
            return jsonify('Sorry, an error has occurred')
        return render_template("errors/500.html", error=error)

    @app.errorhandler(401)
    def unauthorized(error):
        if request.is_xhr:
            return jsonify("Login required")
        #flash(_("Please login to see this page"), "error")
        #return redirect(url_for("account.login", next=request.path))

def configure_logging(app):
    if app.debug or app.testing:
        return

    mail_handler = SMTPHandler(app.config['MAIL_SERVER'],
                               'error@newsmeme.com',
                               app.config['ADMINS'],
                               'application error',
                               (
                                   app.config['MAIL_USERNAME'],
                                   app.config['MAIL_PASSWORD'],
                               ))

    mail_handler.setLevel(logging.ERROR)
    app.logger.addHandler(mail_handler)

    formatter = logging.Formatter(
        '%(asctime)s %(levelname)s: %(message)s '
        '[in %(pathname)s:%(lineno)d]')

    debug_log = os.path.join(app.root_path,
                             app.config['DEBUG_LOG'])

    debug_file_handler = \
        RotatingFileHandler(debug_log,
                            maxBytes=100000,
                            backupCount=10)

    debug_file_handler.setLevel(logging.DEBUG)
    debug_file_handler.setFormatter(formatter)
    app.logger.addHandler(debug_file_handler)

    error_log = os.path.join(app.root_path,
                             app.config['ERROR_LOG'])

    error_file_handler = \
        RotatingFileHandler(error_log,
                            maxBytes=100000,
                            backupCount=10)

    error_file_handler.setLevel(logging.ERROR)
    error_file_handler.setFormatter(formatter)
    app.logger.addHandler(error_file_handler)

