# coding: utf-8
from flask_redis import Redis
from flask.ext.cache import Cache
from flask.ext.login import LoginManager
from flask.ext.sqlalchemy import SQLAlchemy

cache = Cache()
redis_store = Redis()
login_manager = LoginManager()
db = SQLAlchemy()
