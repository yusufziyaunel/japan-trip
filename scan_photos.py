#!/usr/bin/env python3
"""
TAM OTOMATİK FOTOĞRAF TARAYICI
===============================
photos/dayXX/ klasörlerindeki TÜM fotoğrafları tarar ve JSON oluşturur.

Kullanım:
    python3 scan_photos.py

Sonuç:
    photos/day01.json
    photos/day02.json
    ...

JavaScript kullanımı:
    loadAllPhotos('day01', 'gallery-id');
"""

import os
import json
from pathlib import Path

def scan_day_photos(day_folder):
    """
    Bir günün klasöründeki TÜM fotoğrafları tara
    
    Args:
        day_folder (str): Gün klasörü (örn: 'day01')
    
    Returns:
        list: Fotoğraf dosya isimleri
    """
    photos_path = Path('photos') / day_folder
    
    if not photos_path.exists():
        return []
    
    # Desteklenen formatlar
    extensions = {'.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp'}
    
    # Tüm fotoğrafları bul
    photos = []
    for file in sorted(photos_path.iterdir()):
        if file.is_file() and file.suffix.lower() in extensions:
            photos.append(file.name)
    
    return photos

def create_json_manifest(day_id, photos):
    """
    JSON manifest dosyası oluştur
    
    Args:
        day_id (str): Gün ID'si (örn: 'day01')
        photos (list): Fotoğraf listesi
    """
    manifest = {
        'day': day_id,
        'count': len(photos),
        'photos': photos
    }
    
    # JSON dosyası olarak kaydet
    json_path = Path('photos') / f'{day_id}.json'
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    
    return json_path

def scan_all_days():
    """Tüm günleri tara ve JSON oluştur"""
    print('\n' + '='*50)
    print('📸 FOTOĞRAF TARAYICI')
    print('='*50 + '\n')
    
    total_photos = 0
    scanned_days = 0
    
    # Day 1-13 için tara
    for day_num in range(1, 14):
        day_id = f'day{day_num:02d}'
        photos = scan_day_photos(day_id)
        
        if photos:
            json_path = create_json_manifest(day_id, photos)
            print(f'✅ {day_id}: {len(photos)} fotoğraf → {json_path}')
            total_photos += len(photos)
            scanned_days += 1
        else:
            print(f'⚪ {day_id}: Fotoğraf yok (atlanıyor)')
    
    print('\n' + '-'*50)
    print(f'✅ Toplam: {scanned_days} gün, {total_photos} fotoğraf')
    print('-'*50 + '\n')
    
    if scanned_days > 0:
        print('📌 Şimdi yapılacaklar:')
        print('   1. git add photos/*.json')
        print('   2. git commit -m "Fotoğraf manifestoları güncellendi"')
        print('   3. git push\n')

def scan_single_day(day_id):
    """Tek bir günü tara"""
    photos = scan_day_photos(day_id)
    
    if photos:
        json_path = create_json_manifest(day_id, photos)
        print(f'\n✅ {day_id}: {len(photos)} fotoğraf → {json_path}\n')
    else:
        print(f'\n❌ {day_id}: Klasörde fotoğraf bulunamadı\n')

def create_example_structure():
    """Örnek klasör yapısı oluştur"""
    print('\n📁 Örnek klasör yapısı oluşturuluyor...\n')
    
    for day_num in range(1, 4):
        day_id = f'day{day_num:02d}'
        day_path = Path('photos') / day_id
        day_path.mkdir(parents=True, exist_ok=True)
        
        # README ekle
        readme = day_path / 'README.md'
        readme.write_text(
            f'# {day_id.upper()} Fotoğrafları\n\n'
            f'Buraya {day_id} günü çektiğin tüm fotoğrafları at.\n\n'
            f'İsim formatı önemli değil:\n'
            f'- IMG_1234.jpg ✅\n'
            f'- DSC_5678.jpg ✅\n'
            f'- photo.png ✅\n'
            f'- benim-fotom.jpg ✅\n'
        )
    
    print('✅ Örnek klasörler oluşturuldu!\n')
    print('Klasör yapısı:')
    print('photos/')
    for i in range(1, 4):
        print(f'  day{i:02d}/')
        print(f'    README.md')

if __name__ == '__main__':
    import sys
    
    if len(sys.argv) > 1:
        command = sys.argv[1]
        
        if command == 'example':
            create_example_structure()
        elif command.startswith('day'):
            scan_single_day(command)
        elif command == 'help':
            print('\nKullanım:')
            print('  python3 scan_photos.py           # Tüm günleri tara')
            print('  python3 scan_photos.py day01     # Sadece day01')
            print('  python3 scan_photos.py example   # Örnek yapı oluştur')
            print('  python3 scan_photos.py help      # Bu yardım\n')
        else:
            print(f'❌ Bilinmeyen komut: {command}')
            print('   python3 scan_photos.py help ile kullanımı gör\n')
    else:
        scan_all_days()