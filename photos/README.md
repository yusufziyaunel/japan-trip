# 📷 Fotoğraflar

Bu klasör sitenin tüm fotoğraflarını barındırır.

## Gün galerileri (otomatik)

1. Her günün fotoğraflarını ilgili klasöre at: `day01/`, `day02/` … `day13/`
   (Dosya adı önemli değil: `IMG_1234.jpg`, `DSC_5678.jpg`, `tapinak.png` → hepsi olur.)
   Desteklenen formatlar: `.jpg .jpeg .png .webp .gif .bmp`

2. Proje kök dizininde tarayıcıyı çalıştır:
   ```
   python scan_photos.py
   ```
   Bu, her klasör için `day01.json`, `day02.json` … manifest dosyalarını üretir.
   Sayfalar bu JSON'u okuyup fotoğrafları otomatik masonry galeriye dizer.

3. GitHub'a yükle:
   ```
   git add photos/
   git commit -m "Fotoğraflar eklendi"
   git push
   ```

## Gastronomi fotoğrafları (elle)

Yemek fotoğraflarını `gastronomi/` klasörüne koy, ardından
`gastronomi.html` içindeki `dishes` dizisinde her yemeğin `photos: [...]`
satırını gerçek dosya adıyla güncelle. Örn:

```js
photos: ['photos/gastronomi/manbaken-ramen.jpg']
```

> Not: `.gitkeep` dosyaları klasörlerin git'te boşken de kalması içindir;
> fotoğraf ekleyince onları silebilirsin (zorunlu değil).
