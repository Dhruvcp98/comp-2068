const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('hey');
});

app.get('/about', (req,res) =>{
    res.send('i like this');
});

const port = (process.env.PORT || 4000);
app.listen(port, () => console.log('Listening on ${port}'));