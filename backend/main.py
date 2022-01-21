from flask import Flask, jsonify
from flask_cors import CORS

app = Flask("chat_bot")
CORS(app)


@app.route("/", methods=["GET"])
def ping():
    return "Pinging Model Application"


@app.route("/api/sentiment", methods=["POST"])
def api():

    



    return jsonify({"sentiment": "positive"})


if __name__ == "__main__":
    app.run(debug=True, port=9696)
