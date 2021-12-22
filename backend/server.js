const express = require('express');
const app = express();
const cors = require('cors');
const { json } = require('body-parser');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req,res)=>{
    console.log(req.body);
    
    res.send(true);


})



app.listen(5000,()=>{console.log('App rodando na porta 5000')})
