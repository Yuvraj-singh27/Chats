const express = require("express");
const app = express();
const methodOverride = require('method-override');
const port = 8080;
const mongoose = require("mongoose");
const path =require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")))
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(express.json()); // to parse JSON data (if sending JSON)


const Chat = require("./models/chat.js");
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

main().then((res)=>{
   console.log("connection done");
}).catch((err)=>{
   console.log(err);
});






app.get("/chats",async(req,res)=>{
   let chats = await Chat.find();
   res.render("home.ejs",{chats});
});


app.get("/chats/:id/edit",async(req,res)=>{
   let {id} = req.params;
   let chat = await Chat.findById(id);
   
   res.render("edit.ejs",{chat});
});

app.patch("/chats/:id/edit",async(req,res)=>{
   let {newfrom,newto,newmessage} = req.body;
   let {id} = req.params;
   let chat = await Chat.findByIdAndUpdate(id, {from :newfrom, to:newto,message:newmessage},{new:true});
   res.render("edit.ejs",{chat,update:"message was update"});
   
});

app.get("/chats/new",(req,res)=>{
   res.render("new.ejs");
});

app.post("/chats/new",async(req,res)=>{
   let {newfrom,newto,newmessage} = req.body;
   const newUser = new Chat({from:newfrom,to:newto,message:newmessage});
   let newchat = await newUser.save();
   res.redirect("/chats");
})


app.delete("/chats/:id",async(req,res)=>{
   let{id} =req.params;
   let chat = await Chat.findByIdAndDelete(id);
   res.redirect("/chats");

})

app.listen(port,()=>{
   console.log(`server was running at http://localhost:${port}`);
});