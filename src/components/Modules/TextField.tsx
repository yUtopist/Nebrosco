import React from 'react';
import './Modules.css';

export interface TextInputTypes {
	title: string;
	titleSize?: string;
	titleColor?: string;
	element: 'h5' | 'h6' | 'p';
	elementSize?: string;
	elementMargin?: string;
	elementPadding?: string;
	bgColor?: string;
}
interface StylesTypes {
	width?: string;
	height?: string;
	fontSize?: string;
	margin?: string;
	padding?: string;
}

const TextField = (data: TextInputTypes) => {
	const GenerateClassNames = (_data: TextInputTypes) => {
		// Text Color, isHovered
		let _classesReturn: string = '';
		return _classesReturn
	}
	const _classes: string = GenerateClassNames(data);

	// Generating Inline Styles with default values for Element Size and Text Size
	const _styles: StylesTypes = {
		width: data.elementSize,
		height: data.elementSize,
		fontSize: data.titleSize,
		margin: data.elementMargin,
		padding: data.elementPadding
	}

	const ElementTag = data.element
	return (
		<>
			<ElementTag className={'TextField _flex-centered ' + _classes} style={_styles}>
				{data.title}
			</ElementTag>
		</>
	)
}
export default TextField;


// const TextField = (input) => {
// 	const inputData = input['data'];

// 	const inputText = (inputData.text != null) ? inputData.text : 'Text Error';
// 	const inputDescription = (inputData.description != null) ? `- ${inputData.description}` : '';
// 	const inputSize = (inputData.size != null) ? inputData.size : '300px';
// 	const inputColor = (inputData.color != null) ? inputData.color : 'transparent'; //only used for 'boxed' type
// 	// Text Field Type
// 	const availableTypes = [
// 		'boxed',
// 		'remaining'
// 	];
// 	const inputType = (availableTypes.includes(inputData.type)) ? inputData.type : 'default';
// 	const availableModes = [
// 		'developer',
// 		'modelElement'
// 	];
// 	const inputDeveloper = (availableModes.includes(input['mode'])) ? input['mode'] : 'default';

// 	const [isHovered, setIsHovered] = useState(false);
// 	// Rendering
// 	return (
// 		<div style={{
// 			position: 'relative',
// 			width: inputSize,
// 			height: '100%',
// 			display: 'flex',
// 			justifyContent: 'center',
// 			alignItems: 'center',
// 			padding: '0 0.5em',
// 			transition: '.2s',
// 			flex: inputType === 'remaining' ? '2' : '',
// 			boxShadow: isHovered ? 'inset 0px 0px 0px 1px rgba(177, 229, 242, 1)' : 'inset 0px 0px 0px 1px rgba(177, 229, 242, 0)'
// 		}}
// 			onMouseEnter={() => setIsHovered(true)}
// 			onMouseLeave={() => setIsHovered(false)}
// 		>
// 			{ inputType === 'default' || inputType === 'remaining' ? (
// 				<p style={{
// 					position: inputSize === 'auto' ? 'relative' : 'absolute',
// 					left: inputSize === 'auto' ? '0' : '0.5em',
// 				}}
// 				>
// 					{inputText} <span style={{ color: '#8288C1' }}> {inputDescription} </span>
// 				</p>
// 			) : (inputType === 'boxed' ? (
// 				<p style={{
// 					fontSize: '.8em',
// 					fontWeight: '500',
// 					width: inputSize,
// 					backgroundColor: inputColor,
// 					padding: '.2em .5em',
// 					position: 'absolute',
// 					display: 'flex',
// 					justifyContent: 'center',
// 					alignItems: 'center',
// 					borderRadius: '2px'
// 				}}
// 				>
// 					{inputText}
// 				</p>
// 			) : (null))}

// 			{ (inputDeveloper === 'modelElement') ? (
// 				<ModelNotation hovered={isHovered} value={input['notation']} />
// 			) : (null)}
// 		</div>
// 	)
// };

