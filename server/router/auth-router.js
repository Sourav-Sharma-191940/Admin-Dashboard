const express = require('express');
const router = express.Router();
const routing  = require('../controllers/auth_controller')

router.route('/').get(routing.home)
router.route('/register').post(routing.register)

module.exports = router;