import React, { Component } from 'react';
import { View, FlatList, NetInfo, Vibration, Modal } from 'react-native';

import CustomText from '../components/CustomText';
import Product from '../components/Product';
import endpoints from '../consts/endpoints';

import styles from '../assets/styles/Products.style';

const NUMBER_OF_PRODUCTS = 20;

export default class Products extends Component {
	state = {
		data: [],
		refreshing: false,
		offset: 0,
		totalItems: 1,
		networkConnectionLoss: false,
	};

	async componentDidMount() {
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
					this.setState({ error: true, errorMessage: err.message });
				})
				.then(() => this.setState({ refreshing: false }));
		}
	};

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

	showDetails = (name, imageSource) => {
		this.props.navigation.navigate('ProductItem', {
			title: name,
			imageSource: imageSource,
		});
	};

	renderItem = item => {
		return (
			<Product
				imageSource={require('../assets/images/map.png')}
				name={item.name}
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
