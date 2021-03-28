import React, { CSSProperties } from 'react';
import ErrorHandler from '../../Errors/Errors';
import '../Dashboard.css';
import { widgetTypes } from '../DashboardData';

interface dataTypes {
  data: widgetTypes;
  labels: { color: string; label: string }[]
}
type value = number | number[]

const Donut = (data: dataTypes) => {
  const object = data.data;
  let totalValues = 0;
  object.values.forEach((e: value) => totalValues += Array.isArray(e) ? e[0] : e)

  // holly shit i got this
  // rounding up all the angles and making sure they sum up to 360
  // used largest remainder method
  // https://en.wikipedia.org/wiki/Largest_remainder_method
  // https://gist.github.com/scwood/e58380174bd5a94174c9f08ac921994f
  const roundedAnglesArray = object.values.map((e: value, i: number) => {
    const _value = Array.isArray(e) ? e[0] : e;
    const _angle = (_value / totalValues) * 360;
    return {
      integer: Math.floor(_angle),
      reminder: _angle - Math.floor(_angle),
      index: i
    }
  }).sort((a, b) => b.reminder - a.reminder)
  const totalAngles = roundedAnglesArray.reduce((a, b) => a + b.integer, 0)
  for (let i = 0; i < 360 - totalAngles; i++) {
    roundedAnglesArray[i].integer++
  }
  roundedAnglesArray.sort((a, b) => a.index - b.index).map(e => {
    return e.integer
  })

  // a fucking mess
  const membersArray = roundedAnglesArray.map((e, i) => {
    const _value = object.values[i];
    const _part = Math.floor(e.integer / 45);
    return {
      label: object.labels === undefined ? 'Empty' : object.labels[i],
      value: Array.isArray(_value) ? _value[0] : _value,
      angle: e.integer,
      part: _part,
      angleStart: 0,
      angleFinish: 0,
      anglePure: e.integer - (_part * 45),
      color: data.labels[i].color
    }
  })
  membersArray.forEach((e, i) => {
    e.angleStart = i === 0 ? 0 : membersArray[i - 1].angleFinish;
    e.angleFinish = e.angleStart + e.angle;
  })

  object.display ?? (object.display = '')
  const displaySize = object.display.length <= 2 ? '64px'
    : object.display.length <= 4 ? `${72 - (object.display.length * 8)}px`
      : '32px';
  return (
    <div className='Donut flexed'>
      <h1 className='title'>{data.data.title}</h1>
      <div className='graph flexed'>
        <h1 style={{ fontSize: displaySize }}>
          {data.data.display}
        </h1>

        {
          membersArray.map((e, i) => {

            const opposite = (Math.tan(e.anglePure * Math.PI / 180) * 50)
            const point = [
              `${opposite + 50}% 0%`,
              `100% ${opposite}%`,
              `100% ${opposite + 50}%`,
              `${100 - opposite}% 100%`,
              `${50 - opposite}% 100%`,
              `0% ${100 - opposite}%`,
              `0% ${50 - opposite}%`,
              `${opposite}% 0%`,
            ]
            let polygonString = ''
            for (let i = 0; i < e.part; i++) {
              const parts = [
                `100% 0%`,
                `100% 50%`,
                `100% 100%`,
                `50% 100%`,
                `0% 100%`,
                `0% 50%`,
                `0% 0%`
              ]
              polygonString += `, ${parts[i]}`
            }

            // Need to fix colors since now they are index dependend
            // and i need to map thru and find one which is the 
            // same name as in the data array
            const spanStyle: CSSProperties = {
              transform: `rotate(${e.angleStart}deg)`,
              border: `30px solid ${e.color}`,
              clipPath: `polygon(50% 50%, 50% 0%${polygonString}, ${point[e.part]})`,
            }
            return <span style={spanStyle} />
          })
        }
      </div>
    </div>
  )




  /////////////////////////////////////////////////////////////////
  if (data.data.id === 'widget-total-tasks') {
    // const colors = ['#00aad4', '#ff5252', '#5bc565', '#ffe925']
    // const labels = ['Opened', 'In Progress', 'Resolved', 'Reopened']
    // const dataArray = [30, 20, 20, 20]
    // const total = dataArray.reduce((a, b) => a + b, 0);

    // const membersArray = dataArray.map((e, i) => {
    //   const angle = (e / total) * 360
    //   return {
    //     label: labels[i],
    //     value: e,
    //     percentage: e / total,
    //     angle: angle,
    //     part: Math.floor(angle / 45),
    //     angleStart: 0,
    //     angleFinish: 0,
    //     anglePure: angle - ((Math.floor(angle / 45)) * 45)
    //   }
    // })







    // const arrayLol = [40, 70, 100, 150, 190, 250, 310, 320]
    // arrayLol.map(e => {

    //   const value = e;
    //   const part = Math.floor(e / 45)
    //   const corter = part + 1;
    //   const pureValue = value - (part * 45)
    //   const valuesTotal = arrayLol.reduce((a, b) => a + b, 0)
    //   const angle = (pureValue / valuesTotal) * 360
    //   const opposite = Math.tan(angle * Math.PI / 180) * 100
    //   let polygonString = ''


    //   // return console.log(`clip-path: polygon(50% 50%, ${polygonString}, ${opposite})`)

    // })

  }
  /////////////////////////////////////////////////////////////////
}

export default Donut;