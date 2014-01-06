# coding: utf-8
'''
Flask with Angular.js fix the web app url mapping
, in order to save the yeoman way of web front develop way
'''
from flask import Flask
from flask import make_response
from flask import send_file, send_from_directory
from flask.ext.cache import Cache


from dashbord.config import global_config
from dashbord.blueprints.api import api_proxy
from dashbord.clients.vms_client import Client

app = Flask(__name__)

app_config = global_config()

app.config.from_object(app_config)

app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'

app.register_blueprint(api_proxy, url_prefix='/v1')
app.register_blueprint(api_proxy, url_prefix="/v1.1")

cache = Cache(app, config={'CACHE_TYPE': 'simple'})



@cache.cached(timeout=50)
@app.route("/")
def hello():
    resp = make_response(send_file(app.config['INDEX_ROOT']))
    resp.set_cookie('platform', global_config().VMS_PLATFORM_ID)
    return resp

@cache.cached(timeout=50)
@app.route('/views/<path:filename>')
def static_views(filename):
    return send_from_directory(app.config['VIEWS_ROOT'] , filename)

@cache.cached(timeout=50)
@app.route('/styles/<path:filename>')
def static_styles(filename):
    return send_from_directory(app.config['STYLE_ROOT'], filename)

@cache.cached(timeout=50)
@app.route('/bower_components/<path:filename>')
def static_components(filename):
    return send_from_directory(app.config['BOWER_COMPONENTS_ROOT'], filename)

@cache.cached(timeout=50)
@app.route('/scripts/<path:filename>')
def static_scripts(filename):
    return send_from_directory(app.config['SCRIPTS_ROOT'], filename)

@cache.cached(timeout=50)
@app.route('/images/<path:filename>')
def static_images(filename):
    return send_from_directory(app.config['IMAGES_ROOT'], filename)

@cache.cached(timeout=50)
@app.route('/template/<path:filename>')
def static_template(filename):
    return send_from_directory(app.config['TEMPLATE_ROOT'], filename)