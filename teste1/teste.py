from http.server import BaseHTTPRequestHandler

class Server(BaseHTTPRequestHandler):
    def do_GET(get):
        get.send_response(201,'OK')