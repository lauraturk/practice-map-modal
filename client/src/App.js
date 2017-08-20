import React, { Component } from 'react';

import './App.css';
import CurrentConditions from './CurrentConditions';
import Map from './Map.js';
import MapDirections from './MapDirections'
import fetchConditions from './helpers/fetch_helper';
import * as images from './helpers/image_helper';
import * as icons from './helpers/icon_helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: {
        lng: -105.285884,
        lat: 40.016457
      },
      condition: '',
      temp: '',
      summary: '',
      loaded: false
    }
  };

  componentDidMount() {
    fetchConditions(this.state.location)
      .then(conditionObject => {
        const { condition, temp, summary } = conditionObject

        this.setState({
          condition,
          temp,
          summary
        });
      });
  };

  setNewLocation(location) {
    fetchConditions(location)
    .then(conditionObject => {
      const { condition, temp, summary } = conditionObject

      if(this.state.condition !== condition) {
        this.setState({
          location,
          condition,
          temp,
          summary,
          loaded: false
        });
      } else {
        this.setState({
          location,
          condition,
          temp,
          summary,
        });
      };
    });
  };

  imageBackground() {
    if(this.state.loaded) {
      return {
        'backgroundImage': `url(${this.getImage()})`,
        'backgroundSize': 'cover',
        'repeat': 'noRepeat'
      }
    };
  };

  setLoad() {
    this.setState({
      loaded: true
    });
  };

  getImage() {
    const url = Object.keys(images).find(key => {
      return key === this.state.condition
    });
    return images[url]
  };

  render () {
    return (
      <div className={`App-wrapper ${this.state.condition}`} style={this.imageBackground()}>
        <header className='App-header'>
          <h1 className='App-logo'>adventure <div className='App-logoIcon'>{icons.compass}</div> weather</h1>
          <CurrentConditions condition={this.state.condition}
            summary={this.state.summary}
            temp={this.state.temp} />
          <MapDirections />
        </header>
        <img className='hidden'
          onLoad={this.setLoad.bind(this)}
          src={this.getImage()}
          alt={`landscape with ${this.state.condition}`}/>
        <Map setNewLocation={this.setNewLocation.bind(this)} defaultLocation={this.state.location}/>
      </div>
    )
  };
};


export default App;
