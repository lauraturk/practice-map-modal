import React, { Component } from 'react';

import './Map.css'
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoibGF1cmF0dXJrIiwiYSI6ImNqNmswZnlkNzE5Y3Qyd3J5aDlhcmlsNGIifQ.SXlzoMZjRcSRrhqKZ2h5HQ';

class Map extends Component {
  constructor(props) {
    super()
    this.state = {
      lng: props.currentLocation.lng,
      lat: props.currentLocation.lat,
      zoom: 15
    }
  }

  componentDidMount() {
    const { lat, lng, zoom } = this.state

    let map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/lauraturk/cj6kx26lr7l1a2rp4jz151x7n',
      center: [lng, lat],
      zoom
    });

    map.on('load', function() {
      map.loadImage("https://cdn.dribbble.com/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png", function(error, image) {
        if(error) throw error;
        map.addImage('compass', image);
        map.addLayer({
          "id": "points",
          "type": "symbol",
          "source": {
            "type": "geojson",
            "data": {
              "type": "FeatureCollection",
              "features": [{
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [lng, lat]
                }
              }]
            }
          },
          "layout": {
            "icon-image": "compass",
            "icon-size": .5
          }
        });
      });
    })

    map.on('move', () => {
      const { lat, lng } = map.getCenter();

      this.setState({
        lat: lat.toFixed(4),
        lng: lng.toFixed(4),
        zoom: map.getZoom().toFixed(1)
      });
    });

    map.on('click', (e) => {
      this.props.setNewLocation(e.lngLat)
      map.flyTo({center: e.lngLat, zoom: 8})
    });

    map.on('click', 'points', (e) => {
      map.flyTo({center: e.features[0].geometry.coordinates, zoom: 15})
    })
  };

  render() {
    return (
      <section className="u-center">
        <div ref='map' className='Map-wrapper'></div>
      </section>
    )
  };
};

export default Map;
