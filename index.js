const express = require('express')

const app = express();
var count = 0;
app.get('/', (req, res) => {
    count++;
    
    res.send('Hi There! \n Number of visits = ' + count);
});

app.listen(8080, ()=> {
    console.log('Listening on port 8080');
});