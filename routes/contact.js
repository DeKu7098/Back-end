const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const contactControllers = require('../controllers/contact');

const router = express.Router();

router.get('/contact', contactControllers.getContact);

router.post('/contact', contactControllers.postContact);

module.exports = router;