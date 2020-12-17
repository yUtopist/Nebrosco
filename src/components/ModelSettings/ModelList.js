import React, { useState } from 'react';
import Icon from '../Modules/Icon';
import Badge from '../Modules/Badge';
import Empty from '../Modules/Empty';
import TextField from '../Modules/TextField';
import ModelNotation from '../ModelSettings/ModelNotation';

const ModelList = (input) => {
  const inputArray = input['array'];

  let modelElementCount = 1;
  const ModelElement = (_input, _count) => {
    modelElementCount++;
    const modelElementLetter = String.fromCharCode(_count + 64);

    return (
      <div style={{
        position: 'relative',
        width: '1200px',
        height: '150px',
        backgroundColor: '#3D3B5B',
        marginBottom: '1em',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        <ModelNotation mode='modelListElement' />
      </div>
    )
  }

  const CreateModelElement = (_input, _count) => {
    modelElementCount++;
    const modelElementLetter = String.fromCharCode(_count + 64);

    switch (_input.type) {
      case 'Badge':
        return (<Badge data={_input.data} mode='modelElement' notation={modelElementLetter} />)
      case 'Icon':
        return (<Icon data={_input.data} mode='modelElement' notation={modelElementLetter} />)
      case 'TextField':
        return (<TextField data={_input.data} mode='modelElement' notation={modelElementLetter} />)
      case 'Empty':
        return (<Empty data={_input.data} mode='modelElement' notation={modelElementLetter} />)
      case 'MarginRight':
        return (
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '100%',
            flex: '1'
          }}>
            <ModelNotation mode='modelElement' />
            { _input.data.map((object) => CreateModelElement(object, modelElementCount - 1))}
          </div>
        )
      default:
        break;
    }
  }
  // Rendering
  return (
    <div className='ModelList'
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        width: '1300px',
        height: 'auto',
        marginTop: '50px'
      }}
    >
      {inputArray.map((object) => ModelElement(object, modelElementCount))}
    </div>
  )
}

export default ModelList;