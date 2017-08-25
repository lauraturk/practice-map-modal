const express = require('express');
const app = express();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3001);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.post('/api/v1/current_temp', (req, res) => {
  const lat = req.body.lat;
  const long = req.body.long;

  fetch(`https://api.darksky.net/forecast/${process.env.DARK_SKY}/${lat},${long}`, {
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

app.post('/api/v1/map_location', (req, res) => {
  const city = req.body.city;
  const state = req.body.state;

  fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}%20${state}.json?access_token=${process.env.MAP_BOX}`, {
    method: 'GET',
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    }
    res.send(404).json({error: 'error fetching from forward geocoding'})
  })
  .then(jsonData => res.send(jsonData))
  .catch(error => console.log(error))
});

app.listen(app.get('port'), () => {
  console.log(`app running on 3001`)
});
