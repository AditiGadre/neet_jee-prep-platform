import re
with open("src/data/packagesData.ts", "r", encoding="utf8") as f:
    text = f.read()

text = re.sub(r'price: \'.*?\'', "price: 'Free'", text)
text = re.sub(r'originalPrice: \'.*?\'', "originalPrice: ''", text)
text = re.sub(r'discount: \'.*?\'', "discount: ''", text)

with open("src/data/packagesData.ts", "w", encoding="utf8") as f:
    f.write(text)
print("Updated packagesData")
