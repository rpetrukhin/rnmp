import React, { Component } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import PushNotification from 'react-native-push-notification';

import CustomText from '../components/CustomText';
import endpoints from '../consts/endpoints';
import { addProduct } from '../actions/productsNumberAction';

import styles from '../assets/styles/ProductItem.style';
import { limeGreen } from '../assets/styles/epamStyles';

class ProductItem extends Component {
	goBack = () => {
		this.props.navigation.goBack();
	};

	addToCart = () => {
		return fetch(endpoints.addToCart, {
			method: 'POST',
			body: JSON.stringify({
				cartItem: {
					sku: this.props.navigation.state.params.sku,
					qty: 1,
					quote_id: this.props.navigation.state.params.quoteId,
				},
			}),
			headers: {
				Authorization: `Bearer ${this.props.token}`,
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				if (!data.message) {
					this.props.addProduct();

					PushNotification.localNotification({
						title: "You've added a new product to your cart",
						message: data.name,
						subText: `${this.props.productsNumber} products in the cart`,
						color: limeGreen,
						largeIcon: '',
						smallIcon: 'shopping_cart',
					});
				} else {
					console.log(data.message);
				}
			})
			.catch(err => {
				console.log(err);
			});
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
				<TouchableOpacity onPress={this.addToCart} style={styles.button}>
					<CustomText style={styles.buttonText}>Add to cart</CustomText>
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

const mapStateToProps = state => {
	return {
		token: state.tokenStore.token,
		productsNumber: state.productsNumberStore.productsNumber,
	};
};

const mapDispatchToProps = { addProduct };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductItem);
