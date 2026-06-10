from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder="../vue-across/dist", static_url_path="/")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/<path:path>")
def serve_vue(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")

@app.route("/api/hello")
def hello():
    return jsonify({"message": "Hello from Flask API!"})
