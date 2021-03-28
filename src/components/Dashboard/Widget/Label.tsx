import React, { CSSProperties } from 'react';
import '../Dashboard.css';

const Label = (data: { labels: { color: string; label: string }[] }) => {
  return (
    <div className='Label'>
      {
        data.labels.map((e, i) => {
          const labelStyles: CSSProperties = {
            backgroundColor: e.color
          }
          return (
            <>
              <span className='label' style={labelStyles}></span>
              <h5 className='member' >{e.label}</h5>
            </>
          )
        })
      }
    </div>
  )
}

export default Label;