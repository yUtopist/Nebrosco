import React from 'react';
import '../Dashboard.css';
import { groupTypes, widgetTypes } from '../DashboardData';

interface dataTypes {
  data: widgetTypes;
  labels: { color: string; label: string }[]
}

const Line = (data: dataTypes) => {
  // Trash checkers
  // const isItTooLong = {
  //   fontSize: props.display?.includes('/') ? '2.8rem' : ''
  // }

  return (
    // <div className='Line flexed bigged'>
    //   {/* <h4 className='title'>{props.title}</h4> */}
    //   <h4 className='title'>TITLE</h4>
    //   <span className='graph flexed'>
    //     {/* <h1 className='display' style={isItTooLong}>{props.display}</h1> */}
    //   </span>
    // </div>
    <div className='Line widget flexed'>
      {data.data.type}
    </div>
  )
}

export default Line;