const fs = require('fs');
const path = require('path');

// برای تبدیل JPG به PNG در Node.js، از sharp استفاده می‌کنیم
// ابتدا sharp را نصب کنید: npm install sharp

try {
  const sharp = require('sharp');
  
  const inputPath = path.join(__dirname, 'public', 'SiteLogo.jpg');
  const outputPath = path.join(__dirname, 'public', 'SiteLogo.png');
  
  sharp(inputPath)
    .png()
    .toFile(outputPath)
    .then(() => {
      console.log('✅ Logo successfully converted from JPG to PNG!');
      console.log('📁 New file: public/SiteLogo.png');
      
      // حذف فایل JPG قدیمی (اختیاری)
      // fs.unlinkSync(inputPath);
      // console.log('🗑️ Old JPG file removed');
    })
    .catch(err => {
      console.error('❌ Error converting image:', err);
    });
    
} catch (error) {
  console.log('📦 Sharp package not found. Please install it first:');
  console.log('npm install sharp');
  console.log('\nThen run: node convert-logo.js');
}
