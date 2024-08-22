import os
from flask import Flask, request, jsonify
from dotenv import load_dotenv # type: ignore
import mysql.connector

app = Flask(__name__)
load_dotenv()

db = mysql.connector.connect(
    host=os.getenv("DB_HOST"),
    user=os.getenv("DB_USER"),
    password=os.getenv("DB_PASSWORD"),
    database=os.getenv("DB_NAME")
)

cursor = db.cursor()

@app.route('/submit-ad', methods=['POST'])
def submit_ad():
    data = request.get_json()
    title = data['title']
    description = data['description']

    cursor.execute("INSERT INTO Ads (title, description) VALUES (%s, %s)", (title, description))
    db.commit()

    return jsonify({"message": "Ad submitted successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
    