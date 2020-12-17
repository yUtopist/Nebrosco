import React, { useState } from 'react';
import { testerArray } from './TesterArray';
import TestingLine from './TestingLine';

const array = testerArray;

let periodArray = []
array.forEach(element => {
  const periodName = element.period.FormattedName;
  if (!periodArray.includes(periodName)) periodArray.push(periodName)
})

let collaboratorArray = []
array.forEach(element => {
  const collaboratorName = element.collaborator.FileId;
  if (!collaboratorArray.includes(collaboratorName)) collaboratorArray.push(collaboratorName)
})

const Tester = () => {
  return (
    <div style={{
      position: 'relative',
      width: 'auto',
      height: 'auto',
      backgroundColor: '#535077',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    }}>

      <TestingLine type='Top' data={{ array, periodArray }} />
      {collaboratorArray.map((element) => <TestingLine data={{ array, periodArray, element }} />)}

    </div>
  )
};

export default Tester;