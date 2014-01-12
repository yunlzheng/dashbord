# coding: utf-8
import os
from dashbord.config.base import Config
from dashbord.config.development import Development
from dashbord.config.production import Production
from dashbord.config.test import Test

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

        print "global config {0}".format(_global_config)

    return _global_config