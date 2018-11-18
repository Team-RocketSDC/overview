const fs = require('fs');
const sprintf = require('sprintf-js');
// const faker = require('faker');

const FOODCATEGORIES = ['food', 'drinks', 'food', 'food']; // 3/4th chance of food

const imagesUrl = 'database/images3.csv';
const imagesCols = 'category,restaurant,image';
const num = 20000000;
const rest = 10000000;
// const runAlready = true;
let out;
let j = 0;
let randomize = false;

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const seed = (restaurants) => {
  // let randomUser;
  // let randomDescription;
  // let randomDate;
  let randomCategory;
  let randomRestaurant;
  let randomImage;
  let imageNum;

  let imagesData;

  while (j < num) {
    if (j === restaurants) {
      randomize = true;
      console.log('start randomizing');
    }
    // randomUser = faker.name.findName(); // Rowan Nikolaus
    // randomDescription = faker.lorem.sentences();
    // randomDate = faker.date.recent();
    randomCategory = FOODCATEGORIES[getRandomInt(FOODCATEGORIES.length)];
    if (randomize) {
      randomRestaurant = getRandomInt(restaurants) + 1;
    }
    imageNum = sprintf.sprintf('%05s.jpg', getRandomInt(500) + 1);

    if (randomCategory === 'food') {
      randomImage = `https://s3-us-west-1.amazonaws.com/rocket-overview/${randomCategory}/${imageNum}`;
    } else if (randomCategory === 'drinks') {
      randomImage = `https://s3-us-west-1.amazonaws.com/rocket-overview/${randomCategory}/${imageNum}`;
    }

    // if (randomize) {
    //   imagesData = `\n${randomUser},${randomDescription},${randomDate},${randomCategory},${randomRestaurant},${randomImage}`;
    // } else {
    //   imagesData = `\n${randomUser},${randomDescription},${randomDate},${randomCategory},${j + 1},${randomImage}`;
    // }

    if (randomize) {
      imagesData = `\n${randomCategory},${randomRestaurant},${randomImage}`;
    } else {
      imagesData = `\n${randomCategory},${j + 1},${randomImage}`;
    }

    if (!out.write(imagesData)) {
      return;
    }
    j += 1;
  }
  out.end();
};

out = fs.createWriteStream(imagesUrl);
out.write(imagesCols, (err) => {
  if (err) {
    console.log(err);
  }
});

out.once('drain', () => {
  seed(rest);
});

seed(rest);
