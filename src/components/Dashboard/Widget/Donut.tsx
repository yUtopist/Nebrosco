import React, { CSSProperties } from 'react';
import ErrorHandler from '../../Errors/Errors';
import '../Dashboard.css';
import { widgetTypes } from '../DashboardData';
import * as DaddyWants from '../../daddyWants'

interface inputTypes {
  data: widgetTypes;
  labels: { label: string | undefined; color: string; hex: string; }[]
}
type value = number | number[]

const Donut = (input: inputTypes) => {
  const object = input.data;
  const values = object.values.flat()
  const totalValues = values.reduce((a, b) => a + b)
  const anglesArray = DaddyWants.roundedArray(values.map(e => (e / totalValues) * 360), 360)

  // Making a temprory array of elements which contain rounded
  // and prepared angles.
  const membersArray = object.values.map((e: value, i: number) => {
    const value = Array.isArray(e) ? e[0] : e
    const _part = Math.floor(anglesArray[i] / 45);
    return {
      label: object.labels === undefined ? 'Empty' : object.labels[i],
      value: value,
      color: input.labels[i].color,
      colorHex: input.labels[i].hex,
      angle: anglesArray[i],
      part: _part,
      angleStart: 0,
      angleFinish: 0,
      anglePure: anglesArray[i] - (_part * 45),
    }
  })
  membersArray.forEach((e, i) => {
    e.angleStart = i === 0 ? 0 : membersArray[i - 1].angleFinish;
    e.angleFinish = e.angleStart + e.angle;
  })

  // Little logic to reduce font size as string increses length
  object.display ?? (object.display = '')
  const displaySize = object.display.length <= 2 ? '64px'
    : object.display.length <= 4 ? `${72 - (object.display.length * 8)}px`
      : '32px';

  const parts = [
    `100% 0%`,
    `100% 50%`,
    `100% 100%`,
    `50% 100%`,
    `0% 100%`,
    `0% 50%`,
    `0% 0%`
  ]

  return (
    <div className='Donut flexed'>
      <h1 className='title'>{input.data.title}</h1>
      <div className='graph flexed'>
        <h1 style={{ fontSize: displaySize }}>
          {input.data.display}
        </h1>

        {
          membersArray.map((e, i) => {

            // i think misstake is somewhere here because i always assume
            // that the opposite in the one place
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
              polygonString += `, ${parts[i]}`
            }

            // Need to fix colors since now they are index dependend
            // and i need to map thru and find one which is the 
            // same name as in the data array
            const spanStyle: CSSProperties = {
              transform: `rotate(${e.angleStart}deg)`,
              border: `30px solid ${e.colorHex}`,
              clipPath: `polygon(50% 50%, 50% 0%${polygonString}, ${point[e.part]})`,
            }
            return <span style={spanStyle} />
          })
        }
      </div>
    </div>
  )
}

export default Donut;