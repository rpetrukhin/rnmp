import React, { Component } from 'react';
import { Animated } from 'react-native';

import { graphite } from '../assets/styles/epamStyles';

export default class CustomText extends Component {
	render() {
		return (
			<Animated.Text
				{...this.props}
				style={[{ fontFamily: 'vincHand', color: graphite }, ...this.props.style]}
			>
				{this.props.children}
			</Animated.Text>
		);
	}
}
