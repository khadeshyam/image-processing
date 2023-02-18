const sharp = require('sharp');

sharp('image.jpg')
  .resize(200,200)
  .grayscale()
  .toFile('filteredImage.jpg', (err, info) => {
    if (err) throw err;
    console.log('Image processed');
  });


// sharp('image.jpg')
//    .resize({ fit: 'cover', width: 300, height: 300 })
//    .resize({ fit: 'inside', width: 300, height: 300 })
//   .grayscale()
//   .toFile('filteredImage.jpg', (err, info) => {
//     if (err) throw err;
//     console.log('Image processed');
//   });

// sharp('image.jpg')
//   .tint(2400, 0.9)
//   .toFile('filteredImage.jpg', (err, info) => {
//     if (err) throw err;
//     console.log('Image tinted and saved');
//   });
