const express = require('express');
const app = express();
const port = 3000;

app.get('/tin-tuc', (red, res) => {

    var a = 1;

    var b = 2;

    var c = a + b;

    res.send('Hello world')
});



app.listen(port, () => {

    console.log(`Tai cong http://localhost:${port}`);
})