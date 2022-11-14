const express = require("express");
const app = express();


const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");


app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items =["Buy Food","Cook Food","Eat Food"];
let workItems = [];

app.get("/",function(req,res){

  let day = date.getDate();

res.render("list",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){


  let item = req.body.newListItems;


  if(req.body.list == "Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);

    res.redirect("/");
  }


});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems:workItems});
});

app.get("/about",function(req,res){
  res.render("about");
});

// app.post("/work",function(req,res){
//   workItems.push(req.body.workItems);
//   res.redirect("/work");
// });

app.listen(3000,function(){
  console.log("Server started...");
});


// function dayName(currentDay){
//   if(currentDay == 0 ){
//     return "Sunday";
//   }
//   else if(currentDay == 1 ){
//     return "Monday";
//   }
//   else if(currentDay == 2 ){
//     return "Tuesday";
//   }
//   else if(currentDay == 3 ){
//     return "Wednesday";
//   }
//   else if(currentDay == 4 ){
//     return "Thursday";
//   }
//   else if(currentDay == 5 ){
//     return "Friday";
//   }
//   else if(currentDay == 6 ){
//     return "Saturday";
//   }
// };
