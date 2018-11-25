const fs = require('fs');
const faker = require('faker');

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

const number = 10000000;
const restaurantsUrl = 'database/restaurantsNew.csv';
const restaurantsCols = '_id,name,address,cost,phone,website,googleMap';
const runAlready = false; // true if not first run
let out;
let i = 0;

const seed = () => {
  let randomName;
  let randomAddress;
  let randomCost;
  let randomPhone;
  let randomWebsite;
  let randomGoogleMap;
  let restaurantData;

  // seeding the restaurants table
  // for (let i = 0; i < restaurants; i += 1) {
  while (i < number) {
    randomName = faker.company.companyName();
    randomAddress = [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode()].join(', ');
    randomCost = getRandomInt(5) + 1;
    randomPhone = faker.phone.phoneNumberFormat();
    randomWebsite = faker.internet.url();
    randomGoogleMap = `https://s3-us-west-1.amazonaws.com/yump-sf-overview/maps/${getRandomInt(5) + 1}.png`;

    restaurantData = `\n${i + 1},"${randomName}","${randomAddress}",${randomCost},${randomPhone},${randomWebsite},${randomGoogleMap}`;

    i += 1;
    if (!out.write(restaurantData)) {
      return;
    }
  }
  out.end();
};

out = fs.createWriteStream(restaurantsUrl);
out.write(restaurantsCols, (err) => {
  if (err) {
    console.log(err);
  }
});

out.on('drain', () => {
  seed();
});

seed();
