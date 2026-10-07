import base64

with open('q2_image.txt', 'r') as f:
    img_data = f.read()

# Strip "data:image/jpeg;base64,"
header, encoded = img_data.split(",", 1)
decoded = base64.b64decode(encoded)

with open('q2_image.jpg', 'wb') as f:
    f.write(decoded)
print("Decoded image successfully")
