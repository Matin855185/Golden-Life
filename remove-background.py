# نصب کتابخانه‌های مورد نیاز:
# pip install rembg pillow

from rembg import remove
from PIL import Image
import os

def remove_background(input_path, output_path):
    """حذف پس‌زمینه عکس و تبدیل به PNG"""
    try:
        # خواندن عکس ورودی
        with open(input_path, 'rb') as input_file:
            input_data = input_file.read()
        
        # حذف پس‌زمینه
        output_data = remove(input_data)
        
        # ذخیره عکس بدون پس‌زمینه
        with open(output_path, 'wb') as output_file:
            output_file.write(output_data)
        
        print(f"✅ پس‌زمینه با موفقیت حذف شد!")
        print(f"📁 فایل جدید: {output_path}")
        
    except Exception as e:
        print(f"❌ خطا در حذف پس‌زمینه: {e}")

if __name__ == "__main__":
    input_path = "public/SiteLogo.jpg"
    output_path = "public/SiteLogo.png"
    
    if os.path.exists(input_path):
        remove_background(input_path, output_path)
    else:
        print(f"❌ فایل {input_path} پیدا نشد!")
        
# دستورات اجرا:
# 1. pip install rembg pillow
# 2. python remove-background.py
