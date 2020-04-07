//20-04-07 Node and Express CW

//Reference to the express module
let express = require('express');
//Create a server and save it in app
let app = express();
//Call the listen method on app/place a port and function as parameters/sanity in console
app.listen(3000,(req,res)=>{
    console.log("Listening on port 3000")
})