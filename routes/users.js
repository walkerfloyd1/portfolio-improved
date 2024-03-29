const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const { check, validationResult } = require("express-validator");

const User = require('../models/User');

router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('password', 'Please enter a password that is at least 7 characters').isLength({ min: 7}),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {
        name,
        email,
        password,
    } = req.body;

    try {

        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                errors: [{
                    msg: "There is already one user with this email"
                }]
            });
        }

    user = new User({
        name,
        email,
        password,
    })
    
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password,salt);

    await user.save();

    const payload = {
        user: {
            id: user.id
        }
    }

    jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000},
        (err, token) => {
            if(err) throw err;
            res.json({
                token
            })
        }
    )
    
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;