# coding: utf-8
from flask import Blueprint, send_from_directory, send_file, make_response
from flask import current_app
from flask.ext.login import login_required

angular = Blueprint('angular', __name__)


@angular.route('/')
@login_required
def index():
    response = make_response(send_file(current_app.config['INDEX_ROOT']))
    return response


@angular.route('/views/<path:filename>')
@login_required
def views(filename):
    response = make_response(send_from_directory(current_app.config['VIEWS_ROOT'], filename))
    return response


@angular.route('/styles/<path:filename>')
def styles(filename):
    return send_from_directory(current_app.config['STYLE_ROOT'], filename)


@angular.route('/bower_components/<path:filename>')
def components(filename):
    return send_from_directory(current_app.config['BOWER_COMPONENTS_ROOT'], filename)


@angular.route('/scripts/<path:filename>')
def scripts(filename):
    return send_from_directory(current_app.config['SCRIPTS_ROOT'], filename)


@angular.route('/images/<path:filename>')
def images(filename):
    return send_from_directory(current_app.config['IMAGES_ROOT'], filename)


@angular.route('/template/<path:filename>')
def templates(filename):
    return send_from_directory(current_app.config['TEMPLATE_ROOT'], filename)
