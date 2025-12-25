const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

app.get('/about', (req, res) => res.sendFile(__dirname + '/views/about.html'))

app.get('/test', (req, res) => res.send('Success!'))

app.listen(port, () => console.log('The server is running. http://127.0.0.1:3000'))