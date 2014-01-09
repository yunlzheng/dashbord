# coding: utf-8
from os.path import dirname, abspath, join

# 配置文件路径
CONF_DIR = dirname(abspath(__file__))
# Python源代码路径
SRC_DIR = dirname(CONF_DIR)
# 项目根路径
PROJECT_DIR = dirname(SRC_DIR)
# 前端.tmp文件路径
ANGULAR_DEV_DIR = join(PROJECT_DIR, '.tmp')
# 前端app文件路径
ANGULAR_APP_DIR = join(PROJECT_DIR, 'app')