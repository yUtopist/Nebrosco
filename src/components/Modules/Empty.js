import React, { useState } from 'react';
import ModelNotation from '../ModelSettings/ModelNotation';

const Empty = (input) => {
	const inputData = input['data'];

	const inputSize = (inputData.size != null) ? (inputData.size * 40) : 40;
	const availableModes = [
		'developer',
		'modelElement'
	];
	const inputDeveloper = (availableModes.includes(input['mode'])) ? input['mode'] : 'default';

	const EmptyElement = (_input) => {
		const _inputDirection = _input['direction'];
		return (
			<div style={{
				position: 'relative',
				height: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}}
			>
				<img style={{
					width: '15px',
					height: '100%',
					cursor: 'ew-resize'
				}}
					alt='Drag'
					src={`svg/empty-${_inputDirection}.svg`}
				/>
			</div>
		)
	}

	const [isHovered, setIsHovered] = useState(false);
	// Rendering
	return (
		<div style={{
			position: 'relative',
			width: `${inputSize}px`,
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			transition: '.2s',
			boxShadow: isHovered ? 'inset 0px 0px 0px 1px rgba(177, 229, 242, 1)' : 'inset 0px 0px 0px 1px rgba(177, 229, 242, 0)'
		}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{ inputDeveloper === 'modelElement' ? (
				<>
					<EmptyElement direction='left' />
					<div style={{
						width: `${(inputSize - 30)}px`,
						height: '2px',
						backgroundColor: '#535077'
					}}
					>
					</div>
					<EmptyElement direction='right' />
					<ModelNotation hovered={isHovered} value={input['notation']} />
				</>
			) : (null)}
		</div>
	)
}

export default Empty;
