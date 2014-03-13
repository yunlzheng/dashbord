# coding: utf-8
from __future__ import absolute_import
from dashbord.celery import celery
from dashbord.extensions import redis_store


@celery.task
def update_instance_cache():
    pass


@celery.task
def update_volume_cache():
    pass


@celery.task
def update_flovar_cache():
    print "$$$$$$$$$$$$$$$$"
    print "apply celery update cache tasks"
    print redis_store
    print "$$$$$$$$$$$$$$$$"


@celery.task
def update_image_cache():
    pass


@celery.task
def update_port_cache():
    pass
