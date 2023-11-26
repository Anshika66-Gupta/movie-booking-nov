const bcrypt =require('bcryptjs');
const user = require('../models/User');
const Booking = require('../models/Booking');

const getAllUser = async (req, res, next) => { 
    let users;
    try {
        users = await user.find();
    } catch (err) {
        return console.log(err);
    }
    
    if (!users) {
        return res.status(500).json({
            message:"Unexpected error occured"
        })
    }
    return res.status(200).json({users})
}

