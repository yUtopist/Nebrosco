import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import './App.css';
import * as Component from './components/Components';
import Navigation from './components/Navigation/Navigation';

export interface NavigationPropsTypes {
	RenderTab: (input: keyof typeof Component) => void;
	currentTab?: string;
}

const App = () => {
	const [tabName, setTabName] = useState<keyof typeof Component>('Login');
	const navigationProps: NavigationPropsTypes = {
		RenderTab: (input) => {
			setTabName(input);
		},
		currentTab: tabName
	}
	document.title = `Nebrosco - ${tabName}`

	return (
		<main className='App flexed'>
			<Component.Login />
			{/* <Router>
				<Navigation data={navigationProps} />
				<Switch>
					<Route path={`/${tabName}`} component={Component[tabName]} />
					<Route path={`/`} component={Component.Login} />
					<Route path={`*`} component={Component.Dashboard} />
				</Switch>
			</Router> */}
		</main>
	)
};

export default App;