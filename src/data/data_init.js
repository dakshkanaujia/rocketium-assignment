const fs = require('fs');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const url = process.env.DATA_URL;

axios.get(url)
  .then(response => {
    fs.writeFileSync('./src/data/dummyData.json', JSON.stringify(response.data, null, 2));
    console.log('Data fetched and stored successfully.');
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
