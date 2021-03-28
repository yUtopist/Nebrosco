import React, { useState } from 'react';
import './App.css';
import * as Component from './components/Components';
import Navigation from './components/Navigation/Navigation';

export interface NavigationPropsTypes {
	RenderTab: (input: keyof typeof Component) => void;
	currentTab?: string;
}

const App = () => {
	const [tabName, setTabName] = useState<keyof typeof Component>("Dashboard");
	const navigationProps: NavigationPropsTypes = {
		RenderTab: (input) => {
			setTabName(input)
		},
		currentTab: tabName
	}
	const renderContent = () => {
		const Tab = Component[tabName] ?? Component.Dashboard
		return <Tab />
	}
	return (
		<div className="App">
			<Navigation data={navigationProps} />
			{renderContent()}
		</div >
	)
};

export default App;