const Note =  require('../models/Notes');
const express = require('express');
const route = express.Router();
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');
const {body,validationResult} = require('express-validator');


//Route 1 : Creating note of user /api/auth/createnote - Auth required
route.post(("/createnote"),fetchuser,[
    body('description','Cannot be empty').not().isEmpty()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send({error:"Invalid Token"});
    }
    try{
        const note = await Note.create({
            user:req.user.ID,
            title:req.body.title,
            description:req.body.description,
            tag:req.body.tag
        }) 
        res.send(note);
    }catch(error){
        res.send({error:error});
    }
})

//Route 2 : Fetching all notes of user /api/auth/fetchallnotes - Auth required
route.get("/fetchallnotes",fetchuser,async (req,res)=>{
    try{
        const userId = req.user.ID;
        const notes =await Note.find({user:userId});
        res.send(notes);
    }catch(error){
        res.send(error);
    }
})

//Route 3 : Updating note of user using id /api/auth/updatenote/id - Auth required
route.put("/updatenote/:id",fetchuser,async (req,res)=>{
    try{
        //By destructuring taking data from request body
        const{title,description,tag} = req.body;
        const newNote = {};
        //checking if data existed then storing it in new note
        if(title)newNote.title=title;
        if(description)newNote.description=description;
        if(tag)newNote.tag=tag;
        //Fetching note from note id if existed if not sending not found
        let note = await Note.findById(req.params.id);
        if(!note){return res.send("Not Found")}
        //Authenticating user using the user id which we get from fetch user
        if(note.user.toString() != req.user.ID){
            return res.status(401).send("Not Allowed")
        }
        //Updating the users note
        let updatedNote =await Note.findByIdAndUpdate(req.params.id,newNote);
        return res.send("Successfully Updated")

    }catch(error){
        res.send(error);
    }
})

//Route 4 : Deleting note of user using id -- /api/auth/deletenote/id - Auth required
route.delete("/deletenote/:id",fetchuser,async (req,res)=>{
    try{
        //Fetching note from note id if existed if not sending not found
        let note = await Note.findById(req.params.id);
        if(!note){return res.send("Not Found")}
        //Authenticating user using the user id which we get from fetch user
        if(note.user.toString() != req.user.ID){
            return res.status(401).send("Not Allowed")
        }
        //Deleting the users note
        let deletedNote =await Note.findByIdAndDelete(req.params.id);
        return res.json({Status:"Successfully Deleted",Note:deletedNote});

    }catch(error){
        res.send(error);
    }
})

module.exports = route