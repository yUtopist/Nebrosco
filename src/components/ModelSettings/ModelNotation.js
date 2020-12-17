import React, { useState } from 'react';

const ModelNotation = (input) => {
	const availableModes = [
		'model',
		'modelRight',
		'modelList'
	];
	const inputDeveloper = (availableModes.includes(input['type'])) ? input['type'] : 'default';

	const [isHovered, setHovered] = useState(false);
	const inputHover = input['hovered'];
	// Rendering
	return (
		<div style={{
			position: 'absolute',
			width: '100%',
			height: '100%',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			transition: '.2s'
		}}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			{ inputDeveloper === 'model' ? (
				<>
					{/* Horisontal Line */}
					<span style={{
						position: 'absolute',
						backgroundColor: isHovered || inputHover ? '#B1E5F2' : '#e8e9f3',
						left: '2px',
						right: '2px',
						height: '1px',
						top: '-1px',
						transition: '.2s'
					}}></span>
					{/* Vertical Line */}
					<span style={{
						position: 'absolute',
						backgroundColor: isHovered || inputHover ? '#B1E5F2' : '#e8e9f3',
						width: '1px',
						height: '20px',
						top: '0px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						transition: '.2s'
					}}>
						{/* Letter in a Circle */}
						<div style={{
							position: 'absolute',
							width: '17px',
							height: '17px',
							top: '100%',
							borderRadius: '50%',
							border: isHovered || inputHover ? '1px solid #B1E5F2' : '1px solid #e8e9f3',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							transition: '.2s'
						}}>
							<p style={{
								fontSize: '.8em',
								userSelect: 'none',
								transition: '.2s',
								color: isHovered || inputHover ? '#B1E5F2' : '#e8e9f3'
							}}> {input['value']} </p>
						</div>
					</span>
				</>
			) : (null)}

			{ inputDeveloper === 'modelRight' ? (
				<>
					<span style={{
						position: 'absolute',
						backgroundColor: '#e8e9f3',
						width: '1px',
						height: '10px',
						top: '-50px',
						left: '0'
					}}></span>
					<span style={{
						position: 'absolute',
						backgroundColor: '#e8e9f3',
						width: '1px',
						height: '10px',
						top: '-50px',
						right: '0'
					}}></span>
					<span style={{
						position: 'absolute',
						backgroundColor: '#e8e9f3',
						width: '100%',
						height: '1px',
						top: '-50px',
						right: '0'
					}}></span>
					<p style={{
						position: 'absolute',
						top: '-70px',
						fontSize: '.8em'
					}}>Marged To The Right</p>
				</>
			) : (null)}

			{ inputDeveloper === 'modelList' ? (
				<div style={{
					position: 'absolute',
					width: '30px',
					height: '30px',
					left: '-40px',
					borderRadius: '50%',
					border: '1px solid #e8e9f3',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					transition: '.2s'
				}}>
					<p style={{
						fontSize: '.8em',
						userSelect: 'none',
						transition: '.2s',
						color: '#e8e9f3',
					}}> {input['value']} </p>
				</div>
			) : (null)}


		</div >
	)
}

export default ModelNotation;