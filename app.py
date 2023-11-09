from flask import Flask, request, jsonify
import random
import string
from datetime import datetime

app = Flask(__name__)

# Store the current date and sequential number
current_date = None
sequential_number = 1

# Function to generate a random alphanumeric string
def generate_random_string(length):
    return ''.join(random.choices(string.ascii_letters + string.digits, k=length))

# Function to calculate the checksum digit
def calculate_checksum(order_id):
    digit_sum = sum(ord(char) for char in order_id)
    return digit_sum % 10

# Route to generate the order ID
@app.route('/generate_order_id', methods=['GET'])
def generate_order_id():
    global current_date
    global sequential_number

    # Get the current date in the format 'YYYYMMDD'
    today = datetime.now()
    date_str = today.strftime('%Y%m%d')

    # Check if the date has changed; if so, reset the sequential number
    if current_date != date_str:
        current_date = date_str
        sequential_number = 1
    else:
        sequential_number += 1

    # Generate a random alphanumeric string (random part)
    random_part = generate_random_string(6)

    # Format the sequential number as a 4-digit string
    sequential_str = str(sequential_number).zfill(4)

    # Combine all parts to form the order ID
    order_id = f"OD{date_str}{random_part}{sequential_str}"

    # Calculate the checksum and add it to the order ID
    checksum = calculate_checksum(order_id)
    order_id_with_checksum = f"{order_id}{checksum}"

    return jsonify({'order_id': order_id_with_checksum})

if __name__ == '__main__':
    app.run(debug=True)
