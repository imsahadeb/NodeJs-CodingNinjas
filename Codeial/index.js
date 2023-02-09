const express = require('express');
const app = express();
const port =8000;

// Use express router
app.use('/', require('./routes'));

// Set View Engine
app.set('view engine','ejs');
app.set('views', './views');





app.listen(port, (err)=>{
    if(err){
        console.log(`Error to create server: ${err}`);
    }
    console.log(`Server running on port: ${port}`);
})