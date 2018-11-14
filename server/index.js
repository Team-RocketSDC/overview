const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();
const PORT = 9001;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, '../public/')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/api/:id', (req, res) => {
  const theId = req.params.id;
  const data = {};

  db.query(`SELECT * from images WHERE images.restaurant = ${theId}`, (err, result) => {
    if (err) { throw err; }
    data.images = result;
    db.query(`SELECT * from restaurants WHERE id = ${theId}`, (err2, theData) => {
      if (err2) { throw err2; }
      data.restaurant = theData;
      console.log(theData);
      res.send(data);
    });
  });
});

app.post('/api/restaurants', (req, res) => {
  const {
    name, address, cost, phone, website, googleMap,
  } = req.body;
  db.query('INSERT INTO restaurants (name, address, cost, phone, website, googleMap) VALUES (?)', [name, address, cost, phone, website, googleMap], (err) => {
    if (err) {
      throw err;
    } else {
      res.end();
    }
  });
});

app.post('/api/images', (req, res) => {
  const {
    user, description, posted, category, restaurant, image,
  } = req.body;
  db.query('INSERT INTO images (user, description, posted, category, restaurant, image) VALUES (?)', [user, description, posted, category, restaurant, image], (err) => {
    if (err) {
      throw err;
    } else {
      res.end();
    }
  });
});

app.put('/api/restaurants/:id', (req, res) => {
  const {
    name, address, cost, phone, website, googleMap,
  } = req.body;
  const update = {
    name, address, cost, phone, website, googleMap,
  };
  db.query('UPDATE restaurants SET ? WHERE id = ?', [update, req.params.id], (err) => {
    if (err) {
      throw err;
    } else {
      res.end();
    }
  });
});

app.delete('/api/restaurants/:id', (req, res) => {
  db.query(`DELETE FROM restaurants WHERE id=${req.params.id}`, (err) => {
    if (err) {
      throw err;
    } else {
      res.end();
    }
  });
});

app.delete('/api/images/:id', (req, res) => {
  db.query(`DELETE FROM images WHERE id=${req.params.id}`, (err) => {
    if (err) {
      throw err;
    } else {
      res.end();
    }
  });
});

app.listen(PORT, console.log('Listening on port:', PORT));
