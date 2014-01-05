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

app.jinja_env.variable_start_string = '[['
app.jinja_env.variable_end_string = ']]'