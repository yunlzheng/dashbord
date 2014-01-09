# coding: utf-8
from flask.ext.cache import Cache
from flask_redis import Redis

cache = Cache()
redis_store = Redis()
