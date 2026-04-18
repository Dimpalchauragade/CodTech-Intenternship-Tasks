from flask import Flask
from flask_socketio import SocketIO, emit

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

text_data = ""

@app.route("/")
def home():
    return "Backend running"

@socketio.on("text_change")
def handle_text(data):
    global text_data
    text_data = data
    emit("update_text", text_data, broadcast=True)

if __name__ == "__main__":
    socketio.run(app, debug=True, port=5000)