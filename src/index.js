const express = require('express');
const cors = require('cors');
const router = require('../routes/students')
const app = express();
app.use(cors());

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use('/students',router)

const PORT = 7000
app.listen(PORT, ()=> console.log(`server started at port ${PORT}`))

module.exports = app;