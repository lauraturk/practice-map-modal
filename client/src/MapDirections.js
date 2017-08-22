import React from 'react';
import './MapDirections.css'
import * as icons from './helpers/icon_helper'

const MapDirections = () => {
  return (
    <figure className='MapDirections-wrapper'>
      <div className='MapDirections-caption'>
        {icons.compass}
        <figcaption className='MapDirections-caption_hover'>find your perfect lemonade weather</figcaption>
      </div>
      <ul className='MapDirections-list'>
        <li>{icons.zoomIcon}scroll up and down to zoom</li>
        <li>{icons.swipeIcon}click and drag to move</li>
        <li>{icons.clickIcon}click anywhere for current local weather</li>
      </ul>
    </figure>
  )
};

export default MapDirections;
