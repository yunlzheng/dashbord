# coding: utf-8
from __future__ import absolute_import
import os
import imp
from werkzeug.utils import import_string
from celery import Celery

from dashbord.config import Config

__all__ = ["celery"]

celery = Celery()

def from_envvar(env):
    if env in os.environ:
        rv = os.environ.get(env)
        if rv:
            from_pyfile(rv)


def from_pyfile(filename):
    d = imp.new_module('config')
    d.__file__ = filename
    try:
        with open(filename) as config_file:
            exec (compile(config_file.read(), filename, 'exec'), d.__dict__)
    except IOError as e:
        e.strerror = 'Unable to load configuration file (%s)' % e.strerror
        raise
    from_object(d)


def from_object(obj):
    if isinstance(obj, str):
        obj = import_string(obj)
    for key in dir(obj):
        if key.isupper():
            celery[key] = getattr(obj, key)

celery.config_from_object(Config)
from_envvar('DASHBORD_SETTINGS')