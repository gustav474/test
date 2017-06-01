/**
 * Created by gusta on 19.04.2017.
 */
const express = require('express');
const router = express.Router();
const mainController = require('../../controllers/main');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works!');
});

router.get('/search/', mainController.getProducts);

router.get('/singlesearch/', mainController.getSingleProduct);

module.exports = router;
