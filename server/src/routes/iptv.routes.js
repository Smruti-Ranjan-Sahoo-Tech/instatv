const express = require('express');
const IPTVController = require('../controllers/iptv.controller');
const router = express.Router();
// Define IPTV related routes here

router.get("/channels", IPTVController.getAllChannels);

module.exports = router;