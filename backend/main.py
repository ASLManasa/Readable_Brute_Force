from flask_cors import CORS
from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
from better_profanity import profanity
from collections import Counter

app = Flask("Readable")
CORS(app)


@app.route("/", methods=["GET"])
def ping():
    return "Pinging Model Application"


@app.route("/api/sentiment", methods=["POST"])
def api():
    input_json = request.json
    soup = BeautifulSoup(input_json["webData"], 'html.parser')
    result = (soup.get_text()).replace('\\n', '.').replace('\\t', '')
    sentences = list(filter(None, [x.strip(' ') for x in result.split('.')]))

    profanity_check = []

    for i in sentences:
        profanity_check.append(profanity.contains_profanity(i))

    return jsonify({"badSentenceCount": Counter(profanity_check)[True],
                    "goodSentenceCount": Counter(profanity_check)[False],
                    })


if __name__ == "__main__":
    app.run(debug=True, port=9696)
