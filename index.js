const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { PORT } = require('./config/constants');

const app = express();

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Initiated the server on PORT: ${PORT}`);
});
