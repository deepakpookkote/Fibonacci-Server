const express = require('express');
const router = express.Router();

const { check } = require('express-validator');

const {saveScore, getUserScore} = require('../controllers/score');


router.post("/score", [
    check('name', "user name should not be empty").not().isEmpty(),
    check('score', "score name should not be empty").not().isEmpty()
], saveScore);

router.get("/score/:userId", getUserScore);

module.exports = router;