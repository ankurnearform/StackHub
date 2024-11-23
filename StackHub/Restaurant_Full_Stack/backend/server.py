from flask import Flask, jsonify, request
from flask_cors import CORS
import json, os

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return app.send_static_file('index.html')

@app.route('/api/menu', methods=['GET', 'POST'])
def menu():
    if request.method == 'GET':
        return jsonify([
            {'id': 1, 'item': 'Pizza', 'price': 10.99},
            {'id': 2, 'item': 'Burger', 'price': 8.99}
        ])
    elif request.method == 'POST':
        menu_item = request.get_json()
        print("New menu item added:", menu_item)
        # Here you can add code to save the new item to a database
        return jsonify(menu_item), 201

@app.route('/api/reservations', methods=['GET', 'POST'])
def reservations():
    if request.method == 'GET':
        return jsonify([
            {'id': 1, 'name': 'John Doe', 'time': '7:00 PM'}
        ])
    elif request.method == 'POST':
        reservation = request.get_json()
        print("New reservation:", reservation)
        # Here you can add code to save the reservation to a database
        return jsonify(reservation), 201

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.get_json()
    print("Received contact from:", data['email'])
    # Here you can add code to send an email, store to a database, etc.
    return jsonify({'message': 'Contact form received'}), 200

@app.route('/submit-form', methods=['POST'])
def submit_form():
    data = request.get_json()
    print(f"Received form with email {data['email']} and message: {data['message']}")

    if not os.path.exists('./data'):
        os.makedirs('./data')

    file_path = './data/contact-info.json'

    if os.path.exists(file_path):
        with open(file_path, 'r') as file:
            contacts = json.load(file)
    else:
        contacts = []

    contacts.append(data)

    with open(file_path, 'w') as file:
        json.dump(contacts, file, indent=4)

    return jsonify({"status": "success", "message": "Form data received and saved"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=8000)
