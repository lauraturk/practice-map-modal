import React, { Component } from 'react';
import './App.css';
import CurrentConditions from './CurrentConditions'

class App extends Component {
  constructor() {
    super();
    this.state = {
      location: [40.016457, -105.285884],
      condition: '',
      temp: '',
      summary: ''
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
      const current = conditionsData.currently

      return this.setState({
        condition: current.icon,
        temp: current.temperature,
        summary: current.summary
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div className={`App-wrapper ${this.state.condition}`}>
        <CurrentConditions condition={this.state.condition}
          summary={this.state.summary}
          temp={this.state.temp} />
      </div>
    )
  }
};


export default App;
