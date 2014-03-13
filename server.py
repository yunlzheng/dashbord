# coding: utf-8
import os
import argparse
from gevent.wsgi import WSGIServer
from dashbord import create_app

parser = argparse.ArgumentParser()
subparsers = parser.add_subparsers(title="subcommands", dest="command", description='valid subcommands')

parser_development = subparsers.add_parser('development', help='run on development env')
parser_production = subparsers.add_parser('production', help='run on production env')
parser_test = subparsers.add_parser('test', help='run on test env')


if __name__ == "__main__":
    args = parser.parse_args()
    app = create_app(args.command)
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()