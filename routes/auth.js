const express = require('express');
const router = express.Router();

//Posting user route here GET api/auth
//@desc Get logged in user
// @access  Private
router.get('/', (req, res)=>{
    res.send("Get logged in user")
});

//Posting user route here GET api/auth
//@desc Auth user
// @access Public
router.post('/', (req, res)=>{
    res.send("Login User")
});


module.exports = router;