# coding: utf-8
from __future__ import absolute_import
from celery import Celery

from dashbord.config import global_config

config = global_config()

celery = Celery()
celery.config_from_object(config)