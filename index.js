//20-04-07 Node and Express CW

//Reference to the express module
let express = require('express');

//Create a server and save it in app
let app = express();

//Define a variable equal to my name
let name = 'Mary';

//Define an array of student objects with 2 props
let studentArray = [{ name: 'Mary', average: 'High' }, { name: 'Charlie', average: 'Medium' }, { name: 'Lucy', average: 'Low' }];

//Define Root Path
app.get('/', (req, res) => {
    res.send("Welcome to my node & express server");
})

//Route to display name
app.get('/displayName', (req, res) => {
    res.send(`My name is ${name}`);
})

//Route to display student by index position
app.get('/student/:id', (req, res) => {
    //function to render student in index position
    studentArray.forEach((student) => {

        let students = 
            (`The student whose index position matches is ${student.name} and their confidence is ${student.average}%`);
    }
    )

    res.send(students)
})

//Route and function to display all students from array
app.get('/allStudents', (req, res) => {

    let newArray = '';
    studentArray.forEach((student) => {
        
            newArray = newArray + (`<h2>Student: ${student.name}, Confidence: ${student.average}</h2><hr>`);
            console.log(newArray);
        
    })

    console.log('end');

    res.send( `${newArray}`);
})

//Call the listen method on app/place a port and function as parameters/sanity in console
app.listen(7000, () => {
    console.log("Listening on port 7000")
})