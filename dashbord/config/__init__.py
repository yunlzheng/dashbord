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
    global _global_config

    if not _global_config:

        conf_env = os.environ.get('DASHBORD_CONF', None)
        if conf_env is 'production':
             _global_config = Production
        elif conf_env is 'test':
            _global_config = Test
        elif conf_env is 'development':
            _global_config = Development
        else:
            _global_config = Development

    return _global_config