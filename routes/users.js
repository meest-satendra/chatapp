var express = require('express');
var router = express.Router();
const users = require('../models/users');
const jwt = require('jsonwebtoken');
const { SECREATE_KEY } = require('../config/db');
const auth = require('../middleware/auth');

router.post('/register', async (req, res) => {
  try {
    const { username, password, firstName, mobile } = req.body;
    let user = await users.findOne({ username });
    if (user) {
      return res.json('Username already exist')
    }
    user = new users({
      username,
      firstName,
      password,
      mobile
    })
    await user.save();
    res.status(200).json(user)
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { mobile, password } = req.body;
    const user = await users.findOne({ mobile });
    if (!user) {
      res.status(400).json('Invelid details')
    } else if (user.password == password) {
      const payload = {
        user: {
          id: user.id,
          firstName: user.firstName,
          mobile: user.mobile
        }
      };
      jwt.sign(payload, SECREATE_KEY, { expiresIn: 3600 },
        (err, token) => {
          if (err) {
            res.status(400).json({ msg: [{ msg: err }] });
          } else {
            res.status(200).json({ userdata: user, token: token })
          }
        }
      );
    } else {
      res.status(400).json('Invelid details')
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error')
  }
})

/**
 * @Get user Data 
 */
router.get('/user/data', auth, async (req, res) => {
  try {
    const user = await users.findById(req.user.id).select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error', error)
  }
})

/**
 * @Get all users 
 */
router.get('/users', auth, async (req, res) => {
  try {
    const user = await users.find().select('-password');
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json('Server error', error)
  }
})

module.exports = router;
