const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");

const Profile = require('../models/Profile');
const User = require('../models/User');
const Post = require('../models/Post');

router.get('/me', auth, async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', 'name');

        if (!profile) {
            return res.status(400).json({ msg: "There is no profile for this user"})
        }

        res.json(profile)
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// POST api/profile
// @desc Create or update user profile
// @access Private
router.post('/', [ auth, [
    check('location', 'Location is required').not().isEmpty(),
    check('bio', 'Bio is required').not().isEmpty()
]], 
async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array()
        })
    }

    const {
        company, website, location, bio,status, githubusername, skills, youtube, facebook, twitter, instagram, linkedin
    } = req.body;

    //Build Profile object

    const profileFields = {};
    profileFields.user = req.user.id;

    if (location) {
        profileFields.location = location;
    };
    if (bio) {
        profileFields.bio = bio;
    };

    //build social fields 
    profileFields.social = {}
    if (youtube) {
        profileFields.social.youtube = youtube;
    };
    if (twitter) {
        profileFields.social.twitter = twitter;
    };
    if (facebook) {
        profileFields.social.facebook = facebook;
    };
    if (linkedin) {
        profileFields.social.linkedin = linkedin;
    };
    if (instagram) {
        profileFields.social.instagram = instagram;
    };


    try {
        let profile = await Profile.findOne({ user: req.user.id} )

        if (profile) {
            // Update profile
            profile = await Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true });
            return res.json(profile)
        }

        else {
            profile = new Profile(profileFields);

            await profile.save();
            res.json(profile);
        }
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

    console.log(profileFields.bio);
});

router.get('/', async (req, res) => {
    try {
        const profiles = await Profile.find().populate({ model: 'user', path: 'user', select: ['name']});
        res.json(profiles);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.get('/user/:user_id', async (req, res) => {
    try {
        const profile = await Profile.findOne({ user: req.params.user_id }).populate('user', 
        ['name']);

        if (!profile) 
            return res.status(400).json({ msg: "Profile Not Found!! "})
        ;
        res.json(profile);
    } catch(err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') {
            return res.status(400).json({ msg: "Profile Not Found!!"})
        }
        res.status(500).send('Server Error')
    }
});

router.delete('/', auth, async (req, res) => {
    try {
        // remove user posts

        await Post.deleteMany({ user: req.user.id});
        // remove profile
        await Profile.findOneAndDelete({ user: req.user.id });

        //remove user
        await User.findOneAndDelete({ _id: req.user.id });
        res.json({ msg: "User deleted" });
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

router.get('/github/:username', (req, res) => {
    try {
        const options = {
            uri: `https://api.github.com/users/walkerfloyd1/repos?sort=created:asc&client_id=${config.get('githubClientId')}&client_secret=${config.get('githubSecret')}`,
            method: 'GET',
            headers: {'user-agent': 'node.js'}
        };

        request(options, (error, response, body ) => {
            if (error) {
                console.error(error)
            }
            if (response.statusCode !== 200) {
                return res.status(404).json({ msg: 'No Github Profile found'})
            }

            res.json(JSON.parse(body));
        })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error')
    }
})

module.exports = router;