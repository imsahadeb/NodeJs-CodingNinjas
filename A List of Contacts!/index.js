const express = require('express');
const port = 8000;

// Initializing the express app
const app = express();

app.get('/', (req,res)=>{
    res.send('Server is running....');
})


app.listen(port, (err)=>{

    if(err){
        console.log('Error to create server: ', err);
    }
    console.log('Server is running at port ', port)
})