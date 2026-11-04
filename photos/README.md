# 📷 Fotoğraf ekleme

1. Her günün fotoğraflarını ilgili klasöre at: `photos/day01/`, `photos/day02/` … `photos/day13/`
   Dosya adlarını değiştirmene gerek yok (`IMG_1234.jpg`, `DSC_5678.png`… hepsi olur).
   Formatlar: `.jpg .jpeg .png .webp .gif .bmp`
   Fotoğraflar dosya adı sırasına göre dizilir; telefon fotoğrafları zaten tarih sırasındadır.

2. Terminalde proje klasöründe şunu çalıştır (her klasör için bir `dayXX.json` listesi üretir):

   ```
   python3 scan_photos.py
   ```

   Sadece bir günü güncellemek için: `python3 scan_photos.py day05`

3. GitHub'a yükle:

   ```
   git add photos/
   git commit -m "Fotoğraflar eklendi"
   git push
   ```

Her gün sayfasındaki galeri bu listeyi okuyup fotoğrafları kendiliğinden dizer; sayfaları düzenlemen gerekmez.

**İpucu:** Telefon fotoğrafları 3–6 MB olur, site yavaşlar. Yüklemeden önce küçültmek için
(Mac, Terminal) `sips -Z 1800 photos/day01/*.jpg` komutu uzun kenarı 1800 piksele indirir.

## Gastronomi fotoğrafları

Yemek fotoğraflarını `photos/gastronomi/` klasörüne koy ve `gastronomi.html` içindeki
`photos: [...]` satırına dosya adını yaz: `photos: ['photos/gastronomi/manbaken-ramen.jpg']`
