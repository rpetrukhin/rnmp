import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/ProductItem.style';

export default class ProductItem extends Component {
	goBack = () => {
		this.props.navigation.goBack();
	};

	throwError = () => {
		throw new Error('Hello Sentry');
	};

	render() {
		return (
			<ScrollView>
				<View style={styles.borderTop} />
				<View style={styles.header}>
					<Image
						source={this.props.navigation.state.params.imageSource}
						style={styles.image}
					/>
					<CustomText style={styles.title}>
						{this.props.navigation.state.params.title}
					</CustomText>
				</View>
				<View style={styles.descriptionContainer}>
					<CustomText style={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
						officia deserunt mollit anim id est laborum.
					</CustomText>
				</View>
				<TouchableOpacity onPress={this.goBack} style={styles.button}>
					<CustomText style={styles.buttonText}>All Products</CustomText>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={this.throwError}
					style={[styles.button, styles.errorButton]}
				>
					<CustomText style={styles.buttonText}>Error button</CustomText>
				</TouchableOpacity>
				<View style={styles.borderBottom} />
			</ScrollView>
		);
	}
}
