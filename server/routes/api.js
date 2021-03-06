const express = require('express');
const router = express.Router();

const gif = require('../../gif');

gif.trendingData((err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    // console.log(data);
    router.get('/trending', (req, res) => {
      res.send(JSON.stringify(data, undefined, 2));
    });
  }
});

gif.randomData((err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    // console.log(data);
    router.get('/random', (req, res) => {
      res.send(JSON.stringify(data, undefined, 2));
    });
  }
});

gif.stickerData((err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    // console.log(data);
    router.get('/sticker', (req, res) => {
      res.send(JSON.stringify(data, undefined, 2));
    });
  }
});

module.exports = router;