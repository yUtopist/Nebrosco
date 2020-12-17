import React, { useState } from 'react';
import ModelNotation from '../ModelSettings/ModelNotation';

const Badge = (input) => {
	const inputData = input['data'];

	const inputColor = (inputData.color != null) ? inputData.color : '#B1E5F2';
	const inputSize = (inputData.size != null) ? inputData.size : '6px';

	const availableModes = [
		'developer',
		'modelElement'
	];
	const inputDeveloper = (availableModes.includes(input['mode'])) ? input['mode'] : 'default';

	const [isHovered, setIsHovered] = useState(false);
	// Rendering
	return (
		<div style={{
			position: 'relative',
			width: inputSize,
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: inputColor,
			transition: '.2s',
			boxShadow: isHovered ? 'inset 0px 0px 0px 1px rgba(177, 229, 242, 1)' : 'inset 0px 0px 0px 1px rgba(177, 229, 242, 0)'
		}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{ (inputDeveloper === 'modelElement') ? (
				<ModelNotation hovered={isHovered} value={input['notation']} />
			) : (null)}
		</div>

	)
}

export default Badge;
