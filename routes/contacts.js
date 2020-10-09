const express = require('express');
const router = express.Router();

//Posting user route here @GET api/ccontscts
//@desc Get all  contacts
// @access  Private - need to be logged in to get them
router.get('/', (req, res)=>{
    res.send("Get all contacts")
});


//Posting user route here @POST api/ccontscts
//@desc Add Contact
// @access  Private - need to be logged in to get them
router.post('/', (req, res)=>{
    res.send("Add contact")
});


//Posting user route here @update api/contacts/:id
//@desc update Contact
// @access  Private - need to be logged in to get them
router.put('/:id', (req, res)=>{
    res.send("Update contact")
});

//Posting user route here @delete api/ccontscts/:id
//@desc Add Contact
// @access  Private - need to be logged in to get them
router.delete('/:id', (req, res)=>{
    res.send("Delete contact")
});

module.exports = router;