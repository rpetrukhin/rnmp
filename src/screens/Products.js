import React, { Component } from 'react';
import { View, FlatList, NetInfo, Vibration, Modal } from 'react-native';
import { connect } from 'react-redux';

import CustomText from '../components/CustomText';
import Product from '../components/Product';
import endpoints from '../consts/endpoints';
import { setProductsNumber } from '../actions/productsNumberAction';

import styles from '../assets/styles/Products.style';

const NUMBER_OF_PRODUCTS = 20;

const IMAGE_SOURCES = [
	require('../assets/images/camera.png'),
	require('../assets/images/football-ball.png'),
	require('../assets/images/gift.png'),
	require('../assets/images/plus.png'),
	require('../assets/images/smile.png'),
	require('../assets/images/star.png'),
];

class Products extends Component {
	state = {
		data: [],
		refreshing: false,
		offset: 0,
		totalItems: 1,
		networkConnectionLoss: false,
	};

	quoteId = null;

	async componentDidMount() {
		this.getCart();

		this.getProducts();

		NetInfo.isConnected.addEventListener(
			'connectionChange',
			this.handleConnectionLoss
		);

		const isConnected = await NetInfo.isConnected.fetch();
		if (!isConnected) {
			Vibration.vibrate(1000);
			this.setState({ networkConnectionLoss: true });
		}
	}

	componentWillUnmount() {
		NetInfo.isConnected.removeEventListener(
			'connectionChange',
			this.handleConnectionLoss
		);
	}

	handleConnectionLoss = isConnected => {
		if (!isConnected) {
			Vibration.vibrate(1000);
			this.setState({ networkConnectionLoss: true });
		} else {
			this.setState({ networkConnectionLoss: false });
		}
	};

	empty() {
		return;
	}

	getProducts = () => {
		if (this.state.offset < this.state.totalItems) {
			this.setState({ refreshing: true });
			fetch(endpoints.products(NUMBER_OF_PRODUCTS, this.state.offset), {
				method: 'GET',
			})
				.then(res => res.json())
				.then(data => {
					data.items.forEach(el => {
						const randomNumber = Math.floor(6 * Math.random());
						el.imageSource = IMAGE_SOURCES[randomNumber];
					});
					this.setState(prevState => {
						return {
							...prevState,
							data: [...prevState.data, ...data.items],
							totalItems: data.total_count,
							offset: prevState.offset + NUMBER_OF_PRODUCTS,
						};
					});
				})
				.catch(err => {
					console.log(err);
				})
				.then(() => this.setState({ refreshing: false }));
		}
	};

	getCart() {
		fetch(endpoints.cart, {
			method: 'POST',
			body: null,
			headers: {
				Authorization: `Bearer ${this.props.token}`,
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				this.quoteId = data;
			})
			.catch(err => {
				console.log(err);
			});

		fetch(endpoints.itemsInCart, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${this.props.token}`,
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(data => {
				const productsNumber = data.reduce(
					(accumulator, currentValue) => accumulator + currentValue.qty,
					0
				);
				this.props.setProductsNumber(productsNumber);
			})
			.catch(err => {
				console.log(err);
			});
	}

	refresh = () => {
		this.setState(
			{
				data: [],
				offset: 0,
				totalItems: 1,
			},
			this.getProducts
		);
	};

	showDetails = (name, sku, imageSource) => {
		this.props.navigation.navigate('ProductItem', {
			title: name,
			imageSource: imageSource,
			quoteId: this.quoteId,
			sku: sku,
		});
	};

	renderItem = item => {
		return (
			<Product
				imageSource={item.imageSource}
				name={item.name}
				sku={item.sku}
				showDetails={this.showDetails}
			/>
		);
	};

	render() {
		return (
			<View style={styles.container}>
				<CustomText style={styles.title}>Products</CustomText>
				<FlatList
					data={this.state.data}
					renderItem={({ item }) => this.renderItem(item)}
					keyExtractor={item => item.id.toString()}
					refreshing={this.state.refreshing}
					onRefresh={this.refresh}
					onEndReachedThreshold={0.5}
					onEndReached={this.getProducts}
				/>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.networkConnectionLoss}
					onRequestClose={this.empty}
				>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<CustomText style={styles.errorMessage}>
								Please turn your network connection on
							</CustomText>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		token: state.tokenStore.token,
	};
};

const mapDispatchToProps = { setProductsNumber };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Products);
