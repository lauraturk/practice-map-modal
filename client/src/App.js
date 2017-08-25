import React, { Component } from 'react';
import Modal from 'react-modal';

import './App.css';
import CurrentConditions from './CurrentConditions';
import Map from './Map.js';
import MapDirections from './MapDirections'
import LocationSearch from './LocationSearch'
import fetchConditions from './helpers/weatherFetch_helper';
import fetchLocations from './helpers/mapFetch_helper';
import * as images from './helpers/image_helper';
import * as icons from './helpers/icon_helper';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor() {
    super();
    this.defaultLocation = {
      lng: -105.285884,
      lat: 40.016457
    };

    this.state = {
      location: this.defaultLocation,
      locationName: 'Boulder, CO',
      condition: '',
      temp: '',
      summary: '',
      loaded: false,
      modalIsOpen: false
    };
  }

  setOpenModal = () => {
    this.setState({modalIsOpen: true});
  }

  setCloseModal = () => {
    this.setState({modalIsOpen: false});
  }

  componentDidMount() {
    this.setOpenModal()
    fetchConditions(this.state.location)
      .then(conditionObject => {
        const { condition, temp, summary } = conditionObject

        this.setState({
          condition,
          temp,
          summary,
        });
      });
  }

  setNewLocation(location) {
    const {lng, lat, locationName} = location

    fetchConditions({lng, lat})
    .then(conditionObject => {
      const { condition, temp, summary } = conditionObject
      if(this.state.condition !== condition) {
        this.setState({
          locationName,
          location,
          condition,
          temp,
          summary,
          loaded: false
        });
      } else {
        this.setState({
          locationName,
          location,
          condition,
          temp,
          summary,
        });
      };
    });
  }

  imageBackground() {
    if(this.state.loaded) {
      return {
        'backgroundImage': `url(${this.getImage()})`,
        'backgroundSize': 'cover',
        'backgroundPosition': 'bottom',
        'repeat': 'noRepeat'
      }
    };
  }

  setLoad = () => {
    this.setState({
      loaded: true
    });
  }

  getImage = () => {
    const url = Object.keys(images).find(key => {
      return key === this.state.condition
    });
    return images[url]
  }

  handleSearch = (locationQuery) => {
    fetchLocations(locationQuery)
    .then(locationObject => {
      this.setNewLocation(locationObject)
    })
  }

  render () {
    return (
      <div className={`App-wrapper ${this.state.condition}`} style={this.imageBackground()}>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.setCloseModal}
          contentLabel="map directions"
          style={modalStyles}
          >
          <MapDirections />
          <div onClick={() => this.setCloseModal()}>{icons.closeIcon}</div>
        </Modal>
        <header className='App-header'>
          <div className='App-logo'>
            <h1 className='App-logoName'>Lemonade Weather</h1>
            <div className='App-logoIcon'>{icons.compass}</div>
          </div>
          <LocationSearch handleSearch={this.handleSearch}/>
          {this.state.locationName}
          <CurrentConditions condition={this.state.condition}
            summary={this.state.summary}
            temp={this.state.temp} />
        </header>
        <img className='hidden'
          onLoad={this.setLoad}
          src={this.getImage()}
          alt={`landscape with ${this.state.condition} weather`}/>
        <Map setNewLocation={this.setNewLocation.bind(this)}
             currentLocation={this.state.location} />
      </div>
    )
  }
}


export default App;
