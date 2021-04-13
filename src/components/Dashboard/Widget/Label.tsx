import React, { CSSProperties, useState } from 'react';
import '../Dashboard.css';

const Label = (input: { labels: { label: string | undefined; color: string; highlighted: boolean }[] }) => {
  const [isGreyed, setGreyed] = useState(false);

  const labels = input.labels;
  return (
    <div className='Label'>
      {
        labels.map(e => {
          const labelStyles: CSSProperties = {
            backgroundColor: e.color,
          }
          return (
            <span className='member'>
              <span className='color' style={labelStyles} />
              <h5 className='label' >{e.label}</h5>
            </span>
          )
        })
      }
    </div>
  )
}

export default Label;