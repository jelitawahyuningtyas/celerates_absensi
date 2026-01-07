const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const db = require('./config/db'); 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const absensiRoutes = require('./routes/absensi'); 
app.use('/absensi', absensiRoutes); 

app.get('/', (req, res) => {
  res.send('API Absensi Mahasiswa Berjalan...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});