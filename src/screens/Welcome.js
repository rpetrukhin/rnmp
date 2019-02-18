import React, { Component } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/Welcome.style';

export default class Welcome extends Component {
	componentDidMount() {
		setTimeout(() => {
			this.props.navigation.navigate('Main');
		}, 4000);
	}

	render() {
		return (
			<View style={styles.container}>
				<CustomText style={styles.welcomeText}>
					Welcome! We are glad to see you again!
				</CustomText>
				<View style={styles.animationContainer}>
					<LottieView
						source={require('../assets/animations/heart.json')}
						autoPlay
						loop
					/>
				</View>
			</View>
		);
	}
}
