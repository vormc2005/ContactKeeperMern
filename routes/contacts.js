const express = require('express');
const router = express.Router();
const { validationResult, check } = require('express-validator');
const User = require('../models/User');
const Contact = require('../models/Contact');
const auth = require('../middleware/auth');

//Posting user route here @GET api/ccontscts
//@desc Get all  contacts
// @access  Private - need to be logged in to get them
router.get('/', auth, async (req, res)=>{
    // res.send("Get all contacts")
    try{
        const contacts = await Contact.find({user: req.user.id}).sort({date:-1})
        res.json(contacts)
    }catch(err){
        console.error(err.message);
        res.status(500).send("Server Error")
    }
});


//Posting user route here @POST api/ccontscts
//@desc Add Contact
// @access  Private - need to be logged in to get them
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]
],
  async (req, res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors:errors.array()
        })
        
    }
    const {name, email, phone, type} = req.body;
    try{
        const newContact = new Contact({
            name,
            email, 
            phone, 
            type, 
            user: req.user.id
        })
        const contact = await newContact.save();
        res.json(contact)
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
    // res.send("Add contact")
});


//Posting user route here @update api/contacts/:id
//@desc update Contact
// @access  Private - need to be logged in to get them
router.put('/:id', auth, async (req, res)=>{
    // res.send("Update contact")
    const {name, email, phone, type} = req.body;
    //Build a contact object
    const contactFields ={};
    if(name) contactFields.name=name;
    if(email) contactFields.email=email;
    if(phone) contactFields.phone = phone;
    if(type) contactFields.type=type

    try{
        let contact = await Contact.findById(req.params.id);
        if(!contact) return res.status(404).json({msg:'Contact not found'});
        //Make sure user owns contact
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json({msg:'Not authorized'})
            }
            contact = await Contact.findByIdAndUpdate(req.params.id,
                {
                    $set: contactFields
                },
                {new:true}
                )
                res.json(contact);
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
 });

//Posting user route here @delete api/ccontscts/:id
//@desc Add Contact
// @access  Private - need to be logged in to get them
router.delete('/:id', auth, async (req, res)=>{
    // res.send("Delete contact")
    try{
        let contact = await Contact.findById(req.params.id);
        if(!contact) return res.status(404).json({msg:'Contact not found'});
        //Make sure user owns contact
        if(contact.user.toString() !== req.user.id){
            return res.status(401).json({msg:'Not authorized'})
            }
           await Contact.findByIdAndRemove(req.params.id);
            
                res.json({msg:"Contact is removed"});
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
});

module.exports = router;