import os
from PIL import Image

# Percorso della cartella immagini
IMG_DIR = 'loghi'

# Estensioni da convertire
EXTS = ['.jpg', '.jpeg', '.png', '.JPG', '.PNG']

for filename in os.listdir(IMG_DIR):
    name, ext = os.path.splitext(filename)
    if ext.lower() in EXTS:
        img_path = os.path.join(IMG_DIR, filename)
        webp_path = os.path.join(IMG_DIR, name + '.webp')
        try:
            with Image.open(img_path) as img:
                img.save(webp_path, 'webp', quality=80, method=6)
            print(f"Convertito: {filename} -> {name}.webp")
        except Exception as e:
            print(f"Errore su {filename}: {e}") 