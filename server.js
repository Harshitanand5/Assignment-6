const express=require('express');
const bodyParser=require('body-parser');
const mangoose=require('mongoose');
const routes=require('./routes/api');
const error_handler=require('./error_handler/Error');

const app=express();

mangoose.connect('mongodb://localhost/myAPI',{ useUnifiedTopology: true , useNewUrlParser: true} );
mangoose.connection.once('open',()=>{
    console.log('Connection made to the Mongodb');
});
app.use(bodyParser.json());

app.use('/api/v1',routes);

app.use(error_handler);

app.listen(process.env.port ||3001,'127.0.0.1',()=>{
    console.log('Listening for request at port 3001');
});
