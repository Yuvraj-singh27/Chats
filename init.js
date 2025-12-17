const mongoose =require("mongoose");

const Chat = require("./models/chat.js");

async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp');
}

main().then((res)=>{
   console.log("connection done");
}).catch((err)=>{
   console.log(err);
});

let allChats =[
   
   
  { from: "neha", to: "priya", message: "hello priya", created_at: new Date() },
  { from: "rahul", to: "amit", message: "bro, what's up?", created_at: new Date() },
  { from: "priya", to: "neha", message: "I’m good, you?", created_at: new Date() },
  { from: "amit", to: "rahul", message: "all fine here.", created_at: new Date() },
  { from: "anita", to: "suman", message: "let’s meet tomorrow", created_at: new Date() },
  { from: "suman", to: "anita", message: "sure, done!", created_at: new Date() },
  { from: "vikas", to: "rohit", message: "did you complete the task?", created_at: new Date() },
  { from: "rohit", to: "vikas", message: "almost done!", created_at: new Date() },
  { from: "deepa", to: "pankaj", message: "call me when free", created_at: new Date() },
  { from: "pankaj", to: "deepa", message: "ok sure!", created_at: new Date() },
  { from: "arjun", to: "meera", message: "movie tonight?", created_at: new Date() },
  { from: "meera", to: "arjun", message: "yes let’s go!", created_at: new Date() },
  { from: "raj", to: "sonia", message: "happy birthday!", created_at: new Date() },
  { from: "sonia", to: "raj", message: "thank you!", created_at: new Date() },
  { from: "manoj", to: "kiran", message: "join the meeting", created_at: new Date() },
  { from: "kiran", to: "manoj", message: "logging in now", created_at: new Date() },
  { from: "yash", to: "ananya", message: "exam prep done?", created_at: new Date() },
  { from: "ananya", to: "yash", message: "still studying 😅", created_at: new Date() },
  { from: "sahil", to: "muskan", message: "let’s go for a walk", created_at: new Date() },
  { from: "muskan", to: "sahil", message: "good idea", created_at: new Date() },
  { from: "aakash", to: "ritu", message: "are you free?", created_at: new Date() },
  { from: "ritu", to: "aakash", message: "not right now", created_at: new Date() },
  { from: "mohit", to: "simran", message: "miss you!", created_at: new Date() },
  { from: "simran", to: "mohit", message: "same here ❤️", created_at: new Date() },
  { from: "sneha", to: "dev", message: "class at 10?", created_at: new Date() },
  { from: "dev", to: "sneha", message: "yes, don’t be late", created_at: new Date() },
  { from: "harsh", to: "aditi", message: "project files ready?", created_at: new Date() },
  { from: "aditi", to: "harsh", message: "sending soon", created_at: new Date() },
  { from: "tina", to: "komal", message: "let’s go shopping", created_at: new Date() },
  { from: "komal", to: "tina", message: "yesss 😍", created_at: new Date() },
  { from: "veer", to: "riya", message: "party tonight?", created_at: new Date() },
  { from: "riya", to: "veer", message: "of course!", created_at: new Date() },
  { from: "alok", to: "swati", message: "check your email", created_at: new Date() },
  { from: "swati", to: "alok", message: "just did", created_at: new Date() },
  { from: "gaurav", to: "ishita", message: "game time?", created_at: new Date() },
  { from: "ishita", to: "gaurav", message: "let’s play!", created_at: new Date() },
  { from: "varun", to: "kavya", message: "where are you?", created_at: new Date() },
  { from: "kavya", to: "varun", message: "on the way", created_at: new Date() },
  { from: "anil", to: "pooja", message: "assignment done?", created_at: new Date() },
  { from: "pooja", to: "anil", message: "yes submitted", created_at: new Date() },
  { from: "shyam", to: "rekha", message: "good morning", created_at: new Date() },
  { from: "rekha", to: "shyam", message: "morning ☀️", created_at: new Date() },
  { from: "lalit", to: "naina", message: "coffee break?", created_at: new Date() },
  { from: "naina", to: "lalit", message: "let’s go!", created_at: new Date() },
  { from: "ajay", to: "seema", message: "can we talk?", created_at: new Date() },
  { from: "seema", to: "ajay", message: "sure", created_at: new Date() },
  { from: "karan", to: "pallavi", message: "did you eat?", created_at: new Date() },
  { from: "pallavi", to: "karan", message: "yes just now", created_at: new Date() },
  { from: "neeraj", to: "usha", message: "what’s up?", created_at: new Date() },
  { from: "usha", to: "neeraj", message: "all good", created_at: new Date() }
];

Chat.insertMany(allChats);
