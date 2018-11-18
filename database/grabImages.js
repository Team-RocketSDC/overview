// this script will save 500 unique pictures to a directory called imageDirectory
// need images of size: 400 px width and 300 px height
const path = require('path');
const fs = require('fs');
const request = require('request');
const sprintf = require('sprintf-js').sprintf;

const imageType = 'drinks';
const imageDirectory = `database/${imageType}`;
const url = `https://loremflickr.com/400/300/${imageType}`;
let timeout = 0;

for (let i = 1; i <= 500; i += 1) {
  const imageName = sprintf('%05s.jpg', i); // image format is 00001.jpg
  const imagePath = path.join(imageDirectory, imageName);
  setTimeout(() => {
    const stream = request(url).pipe(fs.createWriteStream(imagePath));
    stream.on('finish', (err) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(`Image ${i} written imageDirectory/${imageName}`);
      }
    });
  }, timeout);
  timeout += 2000;
}
