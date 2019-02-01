const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const axios = require('axios');
const PORT = 3000;

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/currency/:name', (req, res, next) => {
  const currency = req.params.name;

  axios.get(`https://api.coindesk.com/v1/${ currency }/historical/close.json`)
  .then(({ data }) => {
    const relevantData = {};  
    relevantData[currency] = data[currency],
    relevantData.disclaimer = data.disclaimer;

    res.send({
      success: true,
      message: 'Fetched data from Coindesk API.',
      data: relevantData,
    });
  })
  .catch(() => {
    res.send({
      success: false,
      message: 'Unable to get data from Coindesk API.',
    });
  })

});

app.listen(PORT, () => console.log(`Listening on port ${ PORT }`))
