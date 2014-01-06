# coding: utf-8
import os
from base import Config
from development import Development
from production import Production
from test import Test

_global_config = None


def global_config():
    """
    get project conf object by env
    @return:
    """
    if not _global_config:
        conf_env = os.environ.get('DASHBORD_CONF', None)
        if conf_env is 'Production':
            Production
        elif conf_env is 'Test':
            return Test
        else:
            return Development
    else:
        return _global_config