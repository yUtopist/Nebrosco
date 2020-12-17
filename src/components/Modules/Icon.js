import React, { useState } from 'react';
import { iconData } from './IconData';
import ModelNotation from '../ModelSettings/ModelNotation';

const Icon = (input) => {
	const inputData = input['data'];

	const inputIcon = (inputData.icon in iconData) ? iconData[inputData.icon] : 'image';
	const inputSize = (inputData.size != null) ? inputData.size : '30px';
	const inputDivSize = (inputData.divSize != null) ? inputData.divSize : '40px';
	const inputColor = (inputData.color === 'dark') ? '_dk' : '';
	const inputHover = (inputData.hover === null) ? 'false' : inputData.hover;
	const availableCursors = [
		'default',
		'pointer',
		'text'
	];
	const inputCursor = (availableCursors.includes(inputData.cursor)) ? inputData.cursor : 'default';

	const [isHovered, setIsHovered] = useState(false);
	// Rendering
	return (
		<div className="Icon"
			style={{
				position: 'relative',
				width: inputDivSize,
				height: "100%",
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				transition: '.2s',
				backgroundColor: inputHover === 'true' && isHovered ? 'rgba(256,256,256, 0.3)' : 'rgba(256,256,256, 0)',
				boxShadow: isHovered ? 'inset 0px 0px 0px 1px rgba(177, 229, 242, 1)' : 'inset 0px 0px 0px 1px rgba(177, 229, 242, 0)'
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<img style={{
				width: inputSize,
				height: inputSize,
				cursor: `${inputCursor}`
			}}
				alt={inputIcon}
				src={`svg/icons/${inputIcon}${inputColor}.svg`}
			/>

			{ (input['mode'] != null) ? (
				<ModelNotation type={input['notationType']} hovered={isHovered} value={input['notation']} />
			) : (null)}
		</div>
	)
};

export default Icon;


