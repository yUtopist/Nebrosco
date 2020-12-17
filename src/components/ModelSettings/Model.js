import React, { useState } from 'react';
import Icon from '../Modules/Icon';
import Badge from '../Modules/Badge';
import Empty from '../Modules/Empty';
import TextField from '../Modules/TextField';
import ModelNotation from '../ModelSettings/ModelNotation';

const Model = (input) => {
	const inputArray = input['array'];

	let modelElementCount = 1;
	const CreateModelElement = (_input, _count) => {
		modelElementCount++;
		const modelElementLetter = String.fromCharCode(_count + 64);

		switch (_input.type) {
			case 'Badge':
				return (<Badge data={_input.data} notationType='model' notation={modelElementLetter} />)
			case 'Icon':
				return (<Icon data={_input.data} notationType='model' notation={modelElementLetter} />)
			case 'TextField':
				return (<TextField data={_input.data} notationType='model' notation={modelElementLetter} />)
			case 'Empty':
				return (<Empty data={_input.data} notationType='model' notation={modelElementLetter} />)
			case 'MarginRight':
				return (
					<div style={{
						position: 'relative',
						justifySelf: 'center',
						display: 'flex',
						justifyContent: 'flex-end',
						alignItems: 'center',
						height: '100%',
						flex: '1'
					}}>
						<ModelNotation mode='modelRight' />
						{ _input.data.map((object) => CreateModelElement(object, modelElementCount - 1))}
					</div>
				)
			default:
				break;
		}
	}
	// Rendering
	return (
		<div
			className='Model'
			style={{
				position: 'relative',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				width: '100%',
				height: '40px',
				backgroundColor: '#3D3B5B'
			}}
		>
			{inputArray.map((object) => CreateModelElement(object, modelElementCount))}

		</div>
	)
}

export default Model;
