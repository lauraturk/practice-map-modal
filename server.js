const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3001);

app.post('/api/v1/current_temp', (req, res) => {
  const lat = req.body.lat;
  const long = req.body.long;

  fetch(`https://api.darksky.net/forecast/ff6da5038956f3ab133b52230e86e4b4/${lat},${long}`, {
    method: 'GET',
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    res.send(404).json({error: 'error fetching from darksky api'})
  })
  .then(jsonData => res.send(jsonData))
  .catch(error => console.log(error))
});

app.listen(app.get('port'), () => {
  console.log(`app running on 3001`)
});
