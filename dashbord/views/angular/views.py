# coding: utf-8
from flask import Blueprint, send_from_directory, send_file, make_response
from flask.ext.login import login_required
from dashbord.config import global_config

config = global_config()
angular = Blueprint('angular', __name__)


@angular.route('/')
@login_required
def index():
    response = make_response(send_file(config.INDEX_ROOT))
    return response


@angular.route('/views/<path:filename>')
@login_required
def views(filename):
    response = make_response(send_from_directory(config.VIEWS_ROOT, filename))
    response.set_cookie('platform_id', value=config.VMS_PLATFORM_ID)
    return response


@angular.route('/styles/<path:filename>')
def styles(filename):
    return send_from_directory(config.STYLE_ROOT, filename)


@angular.route('/bower_components/<path:filename>')
def components(filename):
    return send_from_directory(config.BOWER_COMPONENTS_ROOT, filename)


@angular.route('/scripts/<path:filename>')
def scripts(filename):
    return send_from_directory(config.SCRIPTS_ROOT, filename)


@angular.route('/images/<path:filename>')
def images(filename):
    return send_from_directory(config.IMAGES_ROOT, filename)


@angular.route('/template/<path:filename>')
def templates(filename):
    return send_from_directory(config.TEMPLATE_ROOT, filename)
