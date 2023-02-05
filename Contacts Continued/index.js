const express = require('express');
const path = require('path');

const port =8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
console.log(path.join(__dirname, 'views'));

var contactList =[
    {
        name:'Sahadeb',
        mobile:1234567890
    },
    {
        name:'Akash',
        mobile:1234567891
    },
    {
        name:'Ranjit',
        mobile:1234567892
    }
]

app.get('/', function(req,res){
    return res.render('home',{
        title: "contact list",
        contact_list: contactList
    });
});


app.listen(port, (error)=>{
    if(error){
        console.log(error);
    }
    console.log('Server is runnig on port: ', port);
})