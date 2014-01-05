# coding: utf-8
from flask import Blueprint, send_file

from os.path import join

from dashbord.config.env import ANGULAR_DEV_DIR

static_files = join(ANGULAR_DEV_DIR, 'views')+'/%s'

print static_files

views = Blueprint('views', __name__)


@views.route('/', defaults={'page':'index.html'})
@views.route('/<page>')
def show(page):
    return send_file(static_files % page)