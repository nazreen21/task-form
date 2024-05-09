const express = require('express');
const bodyParser = require('body-parser');

const Contact = require('../models/contact');
const router = express.Router();


router.post('/submit', async (req, res) => {
    try {
        const { firstName, lastName, emailAddress, phoneNumber, message } = req.body;
        const contact = await Contact.create({ 
            firstName,
             lastName, 
             emailAddress,
              phoneNumber,
               message });
        res.status(200).json(contact);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
