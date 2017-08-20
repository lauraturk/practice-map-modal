import React, { Component } from 'react';

import './App.css';
import CurrentConditions from './CurrentConditions'
import Map from './Map.js'
import fetchConditions from './fetch_helper'

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
      summary: ''
    }
  }

  componentDidMount() {
    fetchConditions(this.state.location)
      .then(conditionObject => {
        const { condition, temp, summary } = conditionObject

        this.setState({
          condition,
          temp,
          summary
        });
      })
  }

  setNewLocation(location) {
    fetchConditions(location)
    .then(conditionObject => {
      const { condition, temp, summary } = conditionObject

      this.setState({
        location,
        condition,
        temp,
        summary
      });
    })
  }

  render () {
    return (
      <div className={`App-wrapper ${this.state.condition}`}>
        <CurrentConditions condition={this.state.condition}
          summary={this.state.summary}
          temp={this.state.temp} />
        <Map setNewLocation={this.setNewLocation.bind(this)}/>
      </div>
    )
  }
};


export default App;
