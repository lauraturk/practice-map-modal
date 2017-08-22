import React from 'react';

import { conditionIcons } from './helpers/icon_helper';
import './CurrentConditions.css'

const CurrentConditions = (props) => {
  const { temp, condition, summary} = props;

  const icon = Object.keys(conditionIcons).find(key => {
    return key === condition
  })

  return (
    <section className="CurrentConditions-wrapper">
      <div>
        <h2 className="CurrentConditions-temp">{temp}°</h2>
        <h3 className="CurrentConditions-summary">{summary}</h3>
      </div>
      {conditionIcons[icon]}
    </section>
  )
};

export default CurrentConditions;
