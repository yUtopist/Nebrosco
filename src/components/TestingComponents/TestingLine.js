import { fchown } from 'fs';
import React from 'react'

const NameField = (input) => {
  return (
    <div style={{
      position: 'relative',
      width: '400px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {input['data']}
    </div>
  )
}
const PositionField = (input) => {
  return (
    <div style={{
      width: '200px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {input['data']}
    </div>
  )
}
const DateField = (input) => {
  const inputArray = input['data'].inputArray
  const inputDate = input['data'].element                     // period FormattedName
  const inputCollaborator = input['data'].inputData           // collaborator FileId

  let cost = '-'
  inputArray.forEach(element => {
    if (element.period.FormattedName === inputDate && element.collaborator.FileId === inputCollaborator) {
      cost = element.ServiceCost
    }
  })
  if (input['type'] === 'Top') cost = inputDate

  return (
    <div style={{
      width: '150px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <p>{cost}</p>
    </div>
  )
}

const TestingLine = (input) => {
  const inputArray = input['data'] !== undefined ? input['data'].array : []
  const inputPeriodArray = input['data'] !== undefined ? input['data'].periodArray : []
  const inputData = input['data'] !== undefined ? input['data'].element : []

  let position = '';
  inputArray.map(element => {
    if ((Object.values(element.collaborator.FileId)).includes(inputData)) position = element.collaborator.AllocationType
  })
  let fullName = '';
  inputArray.map(element => {
    if ((Object.values(element.collaborator.FileId)).includes(inputData)) {
      fullName = `${element.collaborator.FirstName} ${element.collaborator.LastName}`
    }
  })

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '40px',
      backgroundColor: input['type'] === 'Top' ? '#8C8CA0' : '',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center'
    }}>
      { input['type'] === 'Top' ? (
        <>
          <NameField data='COLABORADOR' />
          <PositionField data='MODALIDAD' />
          { inputPeriodArray.map((element) => <DateField type='Top' data={{ inputArray, element, inputData }} />)}
        </>
      ) : (
          <>
            <NameField data={fullName} />
            <PositionField data={position} />
            { inputPeriodArray.map((element) => <DateField data={{ inputArray, element, inputData }} />)}
          </>
        )}
    </div>
  )
}

export default TestingLine;