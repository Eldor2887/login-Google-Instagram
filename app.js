const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to iMeet!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`iMeet server is up on port ${PORT}`);
});