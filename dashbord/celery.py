# coding: utf-8
from __future__ import absolute_import

from dashbord.config import global_config
from celery import Celery

config = global_config()

celery = Celery()
celery.config_from_object(config)