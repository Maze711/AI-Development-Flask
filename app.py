from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/api/get_users', methods=['GET'])
def get_users():
    users_url = "https://jsonplaceholder.typicode.com/users"
    response = requests.get(users_url)

    if response.status_code == 200:
        return jsonify(response.json()) 
    else:
        return jsonify({"message": "Failed to fetch data"}), response.status_code

if __name__ == '__main__':
    app.run(debug=True)