const Score = require('../models/score');
const { validationResult } = require('express-validator');



exports.saveScore = async (req, res) => {
    const scoreErrors = validationResult(req);

    if (!scoreErrors.isEmpty()) {
        return res.status(422).json({
            error: scoreErrors.array()[0].msg,
            params: scoreErrors.array()[0].param
        });
    }
    const score = new Score(req.body);
    try {
        await score.save();
        res.json({
            message: 'success',
            score: score
        });

    } catch (error) {
        return res.status(500).json({
            error: 'Not able to save scores in db'
        })
    }
};


exports.getUserScore = async (req, res) => {
    const userId = req.params.userId;
    try {
      const user = await Score.findById(userId);
      if (!user) {
        const error = new Error('Could not find any user');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({
        message: 'success',
        user: user
      });
    } catch (error) {
        return res.status(500).json({
            error: 'Not able to fetch scores in db'
        });
    }
};

