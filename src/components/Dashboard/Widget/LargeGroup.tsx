import React from 'react';
import '../Dashboard.css';
import { groupTypes, widgetTypes } from '../DashboardData';
import { Label } from './Widget';
import { roundedArray } from '../../daddyWants'

// input.data.members.map((e, i) => {
//   const labelArray: string[] = []
//   e.forEach(_e => {
//     _e.labels?.forEach((__e: string) => {
//       const element = Array.isArray(__e) ? __e[0] : __e
//       !labelArray.includes(element) && labelArray.push(element)
//     })
//   })
//   const labelsWithColors = labelArray.map((_e, i) => {
//     const color = isAlt ? colors.altColors[i] : colors.colors[i]
//     return { color: color, label: _e }
//   })
//   return <Group data={e} labels={labelsWithColors} />
// })

const LargeGroup = (input?: { data: groupTypes }) => {
  return (
    <div className='LargeGroup flexed'>
      {input?.data.members.map(e => {

        const labelsArray = [... new Set(e.flatMap(_e => _e.labels))]
        console.log(labelsArray)





        return (
          <div className='group'>
            <div className='flexed'>
              {
                e.map((_e: widgetTypes, i: number) => {
                  const Tab = _e.type;
                  return <Tab data={_e} />
                })
              }
            </div>
            {/* <Label /> */}
          </div>
        )
      })}
    </div>
  )
}

const Group = (data: { data: Array<widgetTypes>; labels: { color: string; label: string }[] }) => {
  let labelsArray: string[] = [];
  //////
  // const object = {
  //   label: object.labels === undefined ? 'Empty' : object.labels[i],
  //   value: Array.isArray(_value) ? _value[0] : _value,
  //   angle: e.integer,
  //   part: _part,
  //   angleStart: 0,
  //   angleFinish: 0,
  //   anglePure: e.integer - (_part * 45),
  //   color: data.labels[i].color
  // }
  ///////
  return
}

export default LargeGroup;

{
  // NEED LOOP TO CHECK ALL LABELS FROM ALL MEMBERS AND ELEMENTS
  // AND THEN SEND IT TO LABELS COMPONENT


  // this part needs to be rewritten
  // for now i do loop thru all the elements in the data and
  // return label, then check if it is fresh and in that case
  // i add it to the array.
}


