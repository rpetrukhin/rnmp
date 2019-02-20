import React, { Component } from 'react';
import { UIManager } from 'react-native';

import Router from './Router';

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends Component {
	render() {
		return <Router />;
	}
}
