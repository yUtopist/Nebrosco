import React, { CSSProperties } from 'react';
import '../Dashboard.css';

interface LabelTypes {
  labels: {
    label: string | undefined;
    color: string;
    hex: string;
  }[]
}

const Label = (input: LabelTypes) => {
  console.log(input)
  return (
    <div className='Label'>
      {
        input.labels.map(e => {
          const labelStyles: CSSProperties = {
            backgroundColor: e.hex
          }
          return (
            <a className='conteiner' href='#'>
              <span className='color' style={labelStyles}></span>
              <h5 className='label' >{e.label}</h5>
            </a>
          )
        })
      }
    </div>
  )
}

export default Label;