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
from flask import g

from dashbord.config import global_config
from dashbord import views
from dashbord.extensions import redis_store
from dashbord.extensions import cache
from dashbord.extensions import login_manager
from dashbord.extensions import db

from dashbord.models import User

__all__ = ["create_app"]

DEFAULT_APP_NAME = 'dashbord'

DEFAULT_BLUEPRINTS = [
    (views.angular, ''),
    (views.auth, '/auth'),
    (views.api_proxy, '/v1')
]


def create_app(command=None, appname=None, blueprints=None):

    if not command:
        command = 'development'

    if not appname:
        appname = DEFAULT_APP_NAME

    if not blueprints:
        blueprints = DEFAULT_BLUEPRINTS

    app = Flask(appname)
    configure_app(app, command)

    configure_logging(app)
    configure_app_jinja(app)
    #configure_before_handlers(app)
    configure_errorhandlers
    configure_extensions(app)
    registe_blueprint(app, blueprints)
    return app


def configure_app(app, command):
    os.environ['DASHBORD_CONF'] = command
    app.config.from_object(global_config())


def configure_app_jinja(app):
    app.jinja_env.variable_start_string = '[['
    app.jinja_env.variable_end_string = ']]'


def configure_extensions(app):
    try:
        redis_store.init_app(app)
        login_manager.init_app(app)
        cache.init_app(app)
        db.init_app(app)
        login_manager.login_view = '/login'
    except Exception as ex:
        raise;


def registe_blueprint(app, blueprints):
    for blueprint, urlprix in blueprints:
        app.register_blueprint(blueprint, urlprix=urlprix)


def configure_before_handlers(app):
    @app.before_request
    def authenticate():
        g.user = getattr(g.identity, 'user', None)


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


@login_manager.user_loader
def load_user(id):
    print "@@ {0}".format(id)
    user = User.query.get(int(id))
    print "@@ load user {0}".format(user)
    return user

