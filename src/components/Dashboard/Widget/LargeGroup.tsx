import React from 'react';
import '../Dashboard.css';
import { groupTypes, widgetTypes } from '../DashboardData';
import { Label } from './Widget';
import { roundedArray } from '../../Operations'

const colors = {
  colors: ['#00aad4', '#ff5252', '#5bc565', '#ffe925'],
  altColors: ['#b1e5f2', '#efb1b1', '#b1efb7', '#efe9b1', '#d0b1ef']
}

const LargeGroup = (input: { data: groupTypes }) => {
  console.log(input.data)
  return (
    <div className='LargeGroup flexed'>
      {
        // this part needs to be rewritten
        // for now i do loop thru all the elements in the data and
        // return label, then check if it is fresh and in that case
        // i add it to the array.
        input.data.members.map((e, i) => {
          const isAlt: boolean = i === 0 ? false : true
          const labelArray: string[] = []
          e.forEach(_e => {
            _e.labels?.forEach((__e: string) => {
              const element = Array.isArray(__e) ? __e[0] : __e
              !labelArray.includes(element) && labelArray.push(element)
            })
          })
          const labelsWithColors = labelArray.map((_e, i) => {
            const color = isAlt ? colors.altColors[i] : colors.colors[i]
            return { color: color, label: _e }
          })
          return <Group data={e} labels={labelsWithColors} />
        })
      }
    </div>
  )
}

const Group = (data: { data: Array<widgetTypes>; labels: { color: string; label: string }[] }) => {
  let labelsArray: string[] = [];
  return (
    <div className='group'>
      <div className='flexed'>
        {
          data.data.map((e: widgetTypes, i: number) => {
            const Tab = e.type;
            return <Tab data={e} labels={data.labels} />
          })
        }
      </div>
      <Label labels={data.labels} />
    </div>
  )
}

export default LargeGroup;