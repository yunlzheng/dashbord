# coding: utf-8
from gevent.wsgi import WSGIServer
from dashbord import create_app

if __name__ == "__main__":
    app = create_app()
    http_server = WSGIServer(('', 5000), app)
    http_server.serve_forever()