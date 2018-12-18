import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity, Modal } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/Login.style';

export default class Login extends Component {
	state = {
		email: null,
		password: null,
		error: false,
		errorMessage: null,
	};

	handleChangeEmail = value => {
		this.setState({ email: value });
	};

	handleChangePassword = value => {
		this.setState({ password: value });
	};

	login = () => {
		const body = {
			username: this.state.email,
			password: this.state.password,
		};

		fetch('http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
			.then(res => res.json())
			.then(data => {
				if (!data.message) {
					this.props.navigation.navigate('Main');
				} else {
					this.setState({ error: true, errorMessage: data.message });
				}
			})
			.catch(err => {
				this.setState({ error: true, errorMessage: err.message });
			});
	};

	closeModal = () => {
		this.setState({ error: false });
	};

	tryLoginAgain = () => {
		this.closeModal();
		this.login();
	};

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../assets/images/smile.png')} style={styles.logo} />
				<CustomText style={styles.title}>Friday's shop</CustomText>
				<TextInput
					style={styles.input}
					placeholder="email"
					value={this.state.email}
					onChangeText={this.handleChangeEmail}
				/>
				<TextInput
					style={styles.input}
					placeholder="password"
					value={this.state.password}
					onChangeText={this.handleChangePassword}
				/>
				<TouchableOpacity onPress={this.login} style={styles.loginButton}>
					<CustomText style={styles.loginButtonText}>login</CustomText>
				</TouchableOpacity>
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.error}
					onRequestClose={this.closeModal}
				>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<CustomText style={styles.errorMessage}>{this.state.errorMessage}</CustomText>
							<View style={styles.modalButtonContainer}>
								<TouchableOpacity onPress={this.closeModal} style={styles.closeButton}>
									<CustomText>Close</CustomText>
								</TouchableOpacity>
								<TouchableOpacity onPress={this.tryLoginAgain} style={styles.tryAgainButton}>
									<CustomText>Try again</CustomText>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}
