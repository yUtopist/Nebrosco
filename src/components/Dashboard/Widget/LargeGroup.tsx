import React, { useState } from 'react';
import { SettingsData } from '../../Settings/SettingsData';
import '../Dashboard.css';
import { groupTypes } from '../DashboardData';
import { Label } from './Widget';

const LargeGroup = (input: { data: groupTypes }) => {
  const data = input.data;
  const [highlightArray, setHighlightArray] = useState(false);


  return (
    <div className='LargeGroup flexed'>
      {data.members.map((e, i) => {
        // Looping thru all items and creating an array of labels
        const labelsArray = [... new Set(e.flatMap(_e => _e.labels))]
          .map((_e, _i) => {
            const colorAlt = i === 0 ? 'dark' : 'bright'
            return {
              label: _e,
              color: SettingsData['theme-colors'][colorAlt][_i],
              highlighted: highlightArray
            }
          })
        return (
          <div className='group'>
            <div className='flexed'>
              {
                e.map(_e => {
                  const Tab = _e.type;
                  return <Tab data={_e} labels={labelsArray} />
                })
              }
            </div>
            <Label labels={labelsArray} />
          </div>
        )
      })}
    </div>
  )
}

export default LargeGroup;