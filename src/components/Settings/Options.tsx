import React, { useRef, useEffect, useState } from 'react';
import Icon from '../Modules/Icon';

const TitleBar = () => {
	const [seachFocused, setSeachFocused] = useState(false);
	const searchField = useRef();

	return (
		<div style={
			{
				width: '100%',
				height: '60px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#3D3B5B'
			}
		}>
			<h6>Task Model Settings</h6>
		</div>
	)
}

const Content = () => {
	const modelArray = [
		{
			type: 'Badge'
		}
	];
	const [customArray, setCustomArray] = useState(modelArray);
	const [menuFocused, setMenuFocused] = useState(false);

	const Model = (input: any) => {
		const custonText = input['type'];

		return (
			<div style={
				{
					position: 'relative',
					width: '1000px',
					height: '40px',
					backgroundColor: '#2E2C43',
					marginTop: '2em',
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center'
				}
			}>
				<button className='button-ghost' style={
					{
						position: 'relative',
						width: '100px',
						height: '100%',
						backgroundColor: 'gray',
						color: '#E8E9F3',
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center'
					}
				}
					onClick={() => setMenuFocused(!menuFocused)} >
					<Icon icon='tickCircle' />
					<h6> {custonText} </h6>
				</button>

				{ menuFocused ? (
					<div style={
						{
							position: 'absolute',
							top: '40px',
							width: 'auto',
							height: '100%',
							backgroundColor: ''
						}
					}>
						<button className='button-ghost' style={
							{
								position: 'relative',
								width: '100px',
								height: 'auto',
								backgroundColor: '#272635',
								color: '#E8E9F3',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center'
							}
						}>
							<Icon icon='tickCircle' />
							<h6> Badge </h6>
						</button>
						<button className='button-ghost' style={
							{
								position: 'relative',
								width: '100px',
								height: 'auto',
								backgroundColor: '#272635',
								color: '#E8E9F3',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center'
							}
						}>
							<Icon icon='tickCircle' />
							<h6> Icon </h6>
						</button>
						<button className='button-ghost' style={
							{
								position: 'relative',
								width: '100px',
								height: 'auto',
								backgroundColor: '#272635',
								color: '#E8E9F3',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center'
							}
						}>
							<Icon icon='tickCircle' />
							<h6> Text </h6>
						</button>
					</div>
				) : (null)}
				<h6> {custonText} </h6>
			</div>
		)
	}

	return (
		<div style={
			{
				width: '100%',
				height: '100%',
				minHeight: '60px',
				backgroundColor: '#535077',
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				flexDirection: 'column'
			}
		}>
			<div style={
				{
					width: '1000px',
					height: '40px',
					backgroundColor: '#3D3B5B',
					marginTop: '2em'
				}
			}>

			</div>

			{ customArray.map((element) => <Model type={element.type} />)}

			<button className='button-ghost' style={
				{
					width: '100px',
					height: '40px',
					backgroundColor: '#2E2C43',
					marginTop: '2em',
					color: '#E8E9F3'
				}
			}
				onClick={() => setCustomArray([...customArray, { type: 'funny' }])}
			>
				<h6>Add Element</h6>
			</button>

		</div>
	)
}

const Options = () => {
	return (
		<div
			style={
				{
					width: '1100px',
					height: '700px'
				}
			}>
			<TitleBar />
			<Content />
		</div>
	)
};

export default Options;
