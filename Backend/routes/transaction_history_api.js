const express = require('express');
const router = express.Router();
const transactionhistoryschema = require('../models/transactionhistory');
router.post('/tranactionpost',async(req,res)=>{
    try{
        const data = req.body;
        const transaction = await transactionhistoryschema(data).save();
        console.log("Data is saved in mongodb");
        res.status(200).json(transaction);
    }
    catch(err){
        console.log(err);
        res.status(500).json({err:'Internal Server error'});
    }
})


router.get('/transaction/email',async(req,res)=>{
    const {email} = req.query;
    console.log("Server side",req.query);
    try{
        const transaction = await transactionhistoryschema.find({SenderEmail:email});
        res.status(200).json(transaction);
    }
    catch(err){
        res.status(500).json({message:'Error fetching transactions',err});
    }
})

router.delete('/deleteemail',async(req,res)=>{
    const {email} = req.query;
    console.log("Email in the server side",req.query);
    console.log("Request query is",email);
    try{
        const deletetransaction = await transactionhistoryschema.deleteMany({SenderEmail:email});
        console.log(deletetransaction);
        res.status(200).json(deletetransaction);
    }
    catch(err){
        res.status(500).json({message:'Error in deleting the transaction',err});
    }
})
module.exports = router;