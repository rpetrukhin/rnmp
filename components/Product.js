import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/Product.style';

export default class Product extends Component {
	showDetails = () => {
		this.props.showDetails(this.props.name, this.props.imageSource);
	};

	render() {
		return (
			<View style={styles.container}>
				<Image source={this.props.imageSource} style={styles.image} />
				<CustomText style={styles.name}>{this.props.name}</CustomText>
				<TouchableOpacity onPress={this.showDetails} style={styles.button}>
					<CustomText style={styles.buttonText}>></CustomText>
				</TouchableOpacity>
			</View>
		);
	}
}
