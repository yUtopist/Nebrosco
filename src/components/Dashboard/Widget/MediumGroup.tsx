import React from 'react';
import '../Dashboard.css';
import { groupTypes, widgetTypes } from '../DashboardData';

interface dataTypes {
  data: groupTypes | widgetTypes;
}

const MediumGroup = (data: dataTypes) => {
  return (
    <div className='MediumGroup flexed'>
      {/* {
        props.array.map(object => {
          return <Widget.Donut {...object} />
        })
      } */}
      {data.data.type}
    </div>
  )
}

export default MediumGroup;