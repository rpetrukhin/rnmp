import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';

import CustomText from '../components/CustomText';
import ProductInCart from '../components/ProductInCart';
import endpoints from '../consts/endpoints';
import { deleteProduct } from '../actions/productsNumberAction';

import styles from '../assets/styles/Cart.style';

const IMAGE_SOURCES = [
	require('../assets/images/camera.png'),
	require('../assets/images/football-ball.png'),
	require('../assets/images/gift.png'),
	require('../assets/images/plus.png'),
	require('../assets/images/smile.png'),
	require('../assets/images/star.png'),
];

class Cart extends Component {
	state = {
		data: null,
	};

	componentDidMount() {
		this.getItems();
	}

	getItems() {
		return fetch(endpoints.itemsInCart, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${this.props.token}`,
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				data.forEach(el => {
					const randomNumber = Math.floor(6 * Math.random());
					el.imageSource = IMAGE_SOURCES[randomNumber];
				});
				this.setState({ data });
			})
			.catch(err => {
				console.log(err);
			});
	}

	deleteItem = (id, number) => {
		return fetch(endpoints.deleteFromCart(id), {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${this.props.token}`,
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				this.props.deleteProduct(number);
				this.setState({
					data: this.state.data.filter(el => el.item_id !== id),
				});
			})
			.catch(err => {
				console.log(err);
			});
	};

	renderItem = item => {
		return (
			<ProductInCart
				imageSource={item.imageSource}
				name={item.name}
				number={item.qty}
				id={item.item_id}
				deleteItem={this.deleteItem}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<CustomText style={styles.title}>Cart</CustomText>
				<FlatList
					data={this.state.data}
					renderItem={({ item }) => this.renderItem(item)}
					keyExtractor={item => item.item_id.toString()}
				/>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.tokenStore.token,
	};
};

const mapDispatchToProps = { deleteProduct };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Cart);
