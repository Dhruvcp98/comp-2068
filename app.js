const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('hey');
});

app.get('/about', (req,res) =>{
    res.send('i like this');
});

app.listen(4000, () => console.log('Listening on 4000'));