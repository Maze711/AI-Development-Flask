from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app, supports_credentials=True)

@app.route('/api/get_users', methods=['GET'])
def get_users():
    try:
        users_url = "https://jsonplaceholder.typicode.com/users"
        response = requests.get(users_url)

        if response.status_code == 200:
            return jsonify(response.json()) 
        else:
            return jsonify({"message": "Failed to fetch data"}), response.status_code
    except Exception as e:
        return jsonify({"message": "Failed to fetch data"}), 500

if __name__ == '__main__':
    app.run(debug=True)