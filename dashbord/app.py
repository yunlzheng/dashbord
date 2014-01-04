# coding: utf-8
import os
from flask import Flask
from flask import send_file, send_from_directory
from dashbord.config.development import Development as DevelopmentConfig
from dashbord.config.production import Production as ProductionConfig
from dashbord.config.test import Test as TestConfig

app = Flask(__name__)

conf = os.environ.get('DASHBORD_CONF', None)

if conf is 'Production':
  app.config.from_object(ProductionConfig)
elif conf is 'Test':
  app.config.from_object(Test)
else:
  app.config.from_object(DevelopmentConfig)

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

app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'