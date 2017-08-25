import React, { Component } from 'react';

class LocationSearch extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <form>
        <input value={this.state.search}
               type='text'
               placeholder='City, State'
               onChange={(e) => {
                 this.setState({
                   search: e.target.value
                 })
               }}/>
        <input type='submit' onClick={(e) => {
          e.preventDefault();
          this.props.handleSearch(this.state.search)}}/>
      </form>
    )
  }

}

export default LocationSearch;
