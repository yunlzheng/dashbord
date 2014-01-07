# coding: utf-8
from gevent.wsgi import WSGIServer
from dashbord import create_app

if __name__ == "__main__":
    app = create_app()
    print app
    http_server = WSGIServer(('', 5100), app)
    http_server.serve_forever()