import React, { useState } from 'react';
import Model from './Model';
import ModelList from './ModelList';

const ModelSettings = () => {
	const [modelArray, setModelArray] = useState([]);

	return (
		<div
			className='ModelSettings'
			style={
				{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
					flexDirection: 'column',
					width: '100%',
					height: '100%'
				}
			}
		>
			<Model array={modelArray} />
			<ModelList array={modelArray} />


			<button className='button-ghost' style={
				{
					width: '100px',
					height: '40px',
					backgroundColor: '#2E2C43',
					marginTop: '5em',
					color: '#E8E9F3'
				}
			}
				onClick={() => setModelArray([...modelArray, { id: 2, type: 'Icon', data: { icon: 'chat' } },])}
			>
				<h6>Add Element</h6>
			</button>

		</div>
	)
}

export default ModelSettings;