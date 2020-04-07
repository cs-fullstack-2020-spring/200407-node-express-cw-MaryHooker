//20-04-07 Node and Express CW

//Reference to the express module
let express = require('express');

//Create a server and save it in app
let app = express();

//Define a variable equal to my name
let name = 'Mary';

//Define an array of student objects with 2 props
let studentArray = [{name:'Mary',average: 80},{name:'Charlie',average:60},{name:'Lucy',average:100}]

//Define Root Path
app.get('/',(req,res)=>{
    res.send("Welcome to my node & express server");
})

//Route to display name
app.get('/displayName',(req,res)=>{
    res.send(`My name is ${name}`);
})

//Route to display student by index position
app.get('/student/:id',(req,res)=>{
    //function to render student in index position
    studentArray.forEach((student,index)=>{
        if(index == req.params.id){
            res.send(`The student whose index position matches is ${student.name} and their avaerage grade is ${student.average}%`); 
        }
    })
})

//Route and function to display all students from array
app.get('/allStudents',(req,res)=>{
    studentArray.map((student,index)=>{
        // if(index == 0,1,2){
            res.send(`Student: ${student.name}, Average: ${student.average}%`);
        // } else if(index == 1){
        //     res.send(`Student: ${student.name}, Average: ${student.average}%`);
        // } else if(index == 2){
        //     res.send(`Student: ${student.name}, Average: ${student.average}%`);
        
     } )})
// })
// })

//Call the listen method on app/place a port and function as parameters/sanity in console
app.listen(7000,(req,res)=>{
    console.log("Listening on port 7000")
})