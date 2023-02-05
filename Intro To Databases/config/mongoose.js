const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
const db = mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open', ()=>{
    console.log('connected to db');
})


// mongoose.connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Successfully connected to MongoDB'))
//   .catch(error => console.error('Failed to connect to MongoDB:', error));
