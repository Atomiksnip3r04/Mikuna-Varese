import csscompressor

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

minified = csscompressor.compress(css)

with open('style.min.css', 'w', encoding='utf-8') as f:
    f.write(minified)

print('Minificazione completata: style.min.css') 