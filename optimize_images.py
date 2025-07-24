import os
from PIL import Image

# Percorso della cartella immagini
IMG_DIR = 'loghi'

# Estensioni da convertire
EXTS = ['.jpg', '.jpeg', '.png', '.JPG', '.PNG', '.webp']
SIZES = [400, 800, 1200]

for filename in os.listdir(IMG_DIR):
    name, ext = os.path.splitext(filename)
    if ext.lower() in EXTS:
        img_path = os.path.join(IMG_DIR, filename)
        try:
            with Image.open(img_path) as img:
                for size in SIZES:
                    if img.width > size:
                        ratio = size / img.width
                        new_height = int(img.height * ratio)
                        img_resized = img.resize((size, new_height), Image.LANCZOS)
                        out_path = os.path.join(IMG_DIR, f"{name}-{size}.webp")
                        img_resized.save(out_path, 'webp', quality=80, method=6)
                        print(f"Creato: {name}-{size}.webp")
        except Exception as e:
            print(f"Errore su {filename}: {e}") 