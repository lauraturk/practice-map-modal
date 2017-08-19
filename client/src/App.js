import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: [40.016457, -105.285884],
      summary: '',
      temp: ''
    }
  }

  componentDidMount() {
    return fetch('/api/v1/current_temp', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        lat: this.state.location[0],
        long: this.state.location[1]
      })
    })
    .then(response => {
      if(response.ok){
        return response.json()
      }
      // throw new Error('bad response')
    })
    .then(conditionsData => {
      console.log(conditionsData);
      return this.setState({
        summary: conditionsData.currently.icon,
        temp: conditionsData.currently.temperature
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div className='App-wrapper'>Hello!</div>
    )
  }
};


export default App;
