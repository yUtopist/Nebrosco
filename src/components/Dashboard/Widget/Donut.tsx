import React, { CSSProperties } from 'react';
import * as DaddyWants from '../../daddyWants';
import '../Dashboard.css';
import { widgetTypes } from '../DashboardData';

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
    const _part = Math.floor(anglesArray[i] / 45);
    const _pure = anglesArray[i] - (_part * 45);
    const _isEven = _part % 2 === 0 ? true : false;
    const _label = object.labels === undefined ? 'Empty' : object.labels[i]
    const _color = input.labels.filter(_e => _e.label === _label && _e)[0]
    return {
      colorHex: _color.hex,
      angle: anglesArray[i],
      part: _part,
      angleStart: 0,
      angleFinish: 0,
      anglePure: _isEven ? _pure : 45 - _pure,
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

  return (
    <div className='Donut flexed'>
      <h1 className='title'>{input.data.title}</h1>
      <div className='graph flexed'>
        <h1 style={{ fontSize: displaySize }}>
          {input.data.display}
        </h1>
        {
          membersArray.map((e, i) => {

            let polygonString = ''
            const parts = [
              `100% 0%`,
              `100% 50%`,
              `100% 100%`,
              `50% 100%`,
              `0% 100%`,
              `0% 50%`,
              `0% 0%`
            ]
            for (let i = 0; i < e.part; i++) {
              polygonString += `, ${parts[i]}`
            }
            const opposite = Math.tan((e.anglePure) * Math.PI / 180) * 50
            const point = [
              `${opposite + 50}% 0%`,
              `100% ${50 - opposite}%`,
              `100% ${opposite + 50}%`,
              `${opposite + 50}% 100%`,
              `${50 - opposite}% 100%`,
              `0% ${opposite + 50}%`,
              `0% ${50 - opposite}%`,
              `${50 - opposite}% 0%`,
            ]

            const spanStyle: CSSProperties = {
              borderColor: e.colorHex,
              transform: `rotate(${e.angleStart}deg)`,
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