const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

router.get('/data', dataController.getAllData);

router.get('/data/filter', dataController.filterData);

module.exports = router;
