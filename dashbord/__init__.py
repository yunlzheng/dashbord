# coding: utf-8
'''
Flask with Angular.js fix the web app url mapping
, in order to save the yeoman way of web front develop way
'''
from flask import Flask
from flask import send_file, send_from_directory
from dashbord.config import global_config
from dashbord.blueprints.api_v1 import api_proxy

app = Flask(__name__)

app.config.from_object(global_config())

app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'

app.register_blueprint(api_proxy, url_prefix='/v1')
app.register_blueprint(api_proxy, url_prefix="/v1.1")


@app.route("/")
def hello():
    return send_file(app.config['INDEX_ROOT'])

@app.route('/views/<path:filename>')
def static_views(filename):
    return send_from_directory(app.config['VIEWS_ROOT'] , filename)

@app.route('/styles/<path:filename>')
def static_styles(filename):
    return send_from_directory(app.config['STYLE_ROOT'], filename)

@app.route('/bower_components/<path:filename>')
def static_components(filename):
    return send_from_directory(app.config['BOWER_COMPONENTS_ROOT'], filename)

@app.route('/scripts/<path:filename>')
def static_scripts(filename):
    return send_from_directory(app.config['SCRIPTS_ROOT'], filename)

@app.route('/images/<path:filename>')
def static_images(filename):
    return send_from_directory(app.config['IMAGES_ROOT'], filename)

@app.route('/template/<path:filename>')
def static_template(filename):
    return send_from_directory(app.config['TEMPLATE_ROOT'], filename)