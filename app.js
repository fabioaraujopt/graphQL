const express = require('express');
const graphql = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const uri = "mongodb+srv://fabioaraujo:admin@graphqltest-or1tu.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.catch(error => console.log(error))

mongoose.connection.once('open', ()=>{console.log("db connected")});



const app = express();

app.use('/graphql', graphql({
    schema,
    graphiql: true
}))

port = 4000;
app.listen(port,()=>{
    console.log("listening on "+port);
})




