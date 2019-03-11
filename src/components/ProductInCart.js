import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/ProductInCar.style';

export default class ProductInCart extends Component {
	deleteItem = () => {
		this.props.deleteItem(this.props.id, this.props.number);
	};

	render() {
		const productWord = this.props.number === 1 ? 'product' : 'products';
		return (
			<View style={styles.container}>
				<Image source={this.props.imageSource} style={styles.image} />
				<CustomText style={styles.name}>
					{`${this.props.name} - ${this.props.number} ${productWord}`}
				</CustomText>
				<TouchableOpacity onPress={this.deleteItem} style={styles.button}>
					<CustomText style={styles.buttonText}>x</CustomText>
				</TouchableOpacity>
			</View>
		);
	}
}
