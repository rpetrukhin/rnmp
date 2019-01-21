import React, { Component } from 'react';
import {
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Modal,
	NetInfo,
	LayoutAnimation,
	Animated,
} from 'react-native';

import CustomText from '../components/CustomText';
import CustomTextAnimated from '../components/CustomTextAnimated';

import styles from '../assets/styles/Login.style';
import { limeGreen, limeGreenDark } from '../assets/styles/epamStyles';

export default class Login extends Component {
	constructor() {
		super();

		this.state = {
			email: null,
			password: null,
			networkError: false,
			wrongCredentials: false,
			isFetching: false,
		};

		this.networkConnectionLoss = false;

		this.initLoginAnimationParams();
		this.initLoginAnimationProcess();
	}

	componentDidMount() {
		NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionLoss);
	}

	componentWillUnmount() {
		NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionLoss);
	}

	initLoginAnimationParams() {
		this.loginButtonInitialWidth = new Animated.Value(40);
		this.loginDotsInitialOpacity = new Animated.Value(0);
		this.dot1 = new Animated.Value(0);
		this.dot2 = new Animated.Value(0);
		this.dot3 = new Animated.Value(0);
	}

	initLoginAnimationProcess() {
		const duration1 = 300;
		const duration2 = 400;
		const heightDotRise = -5;

		this.loginAnimationProcess = Animated.sequence([
			Animated.parallel([
				Animated.timing(this.loginButtonInitialWidth, {
					toValue: 10,
					duration: duration1,
				}),
				Animated.timing(this.loginDotsInitialOpacity, {
					toValue: 1,
					duration: duration1,
				}),
			]),
			Animated.loop(
				Animated.sequence([
					Animated.timing(this.dot1, {
						toValue: heightDotRise,
						duration: duration2,
					}),
					Animated.parallel([
						Animated.timing(this.dot1, {
							toValue: 0,
							duration: duration2,
						}),
						Animated.timing(this.dot2, {
							toValue: heightDotRise,
							duration: duration2,
						}),
					]),
					Animated.parallel([
						Animated.timing(this.dot2, {
							toValue: 0,
							duration: duration2,
						}),
						Animated.timing(this.dot3, {
							toValue: heightDotRise,
							duration: duration2,
						}),
					]),
					Animated.timing(this.dot3, {
						toValue: 0,
						duration: duration2,
					}),
				])
			),
		]);
	}

	resetLoginAnimationParams() {
		const duration = 700;

		Animated.parallel([
			Animated.timing(this.loginButtonInitialWidth, {
				toValue: 40,
				duration: duration,
			}),
			Animated.timing(this.loginDotsInitialOpacity, {
				toValue: 0,
				duration: duration,
			}),
			Animated.timing(this.dot1, {
				toValue: 0,
				duration: duration,
			}),
			Animated.timing(this.dot2, {
				toValue: 0,
				duration: duration,
			}),
			Animated.timing(this.dot3, {
				toValue: 0,
				duration: duration,
			}),
		]).start();

		this.initLoginAnimationProcess();
	}

	handleConnectionLoss = isConnected => {
		if (!isConnected) {
			this.networkConnectionLoss = true;
		} else {
			this.networkConnectionLoss = false;
		}
	};

	handleChangeEmail = value => {
		this.setState({ email: value, wrongCredentials: false });
	};

	handleChangePassword = value => {
		this.setState({ password: value, wrongCredentials: false });
	};

	login = () => {
		if (!this.networkConnectionLoss) {
			this.setState({ isFetching: true });

			this.loginAnimationProcess.start();

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
				.finally(async data => {
					await new Promise(resolve => setTimeout(resolve, 1500));
					this.loginAnimationProcess.stop();
					this.resetLoginAnimationParams();
					return data;
				})
				.then(data => {
					if (!data.message) {
						NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionLoss);
						this.props.navigation.navigate('Main');
					} else {
						LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
						this.setState({ wrongCredentials: true });
					}
				})
				.catch(err => {
					this.setState({ networkError: true });
				})
				.finally(() => {
					this.setState({ isFetching: false });
				});
		} else {
			this.setState({ networkError: true });
		}
	};

	closeModal = () => {
		this.setState({ networkError: false });
	};

	tryLoginAgain = () => {
		this.closeModal();
		this.login();
	};

	renderLoginButton() {
		const loginButtonContainerWidth = this.loginButtonInitialWidth.interpolate({
			inputRange: [0, 100],
			outputRange: ['0%', '100%'],
		});

		const loginButtonTextOpacity = this.loginDotsInitialOpacity.interpolate({
			inputRange: [0, 1],
			outputRange: [1, 0],
		});

		const loginBackgroundColor = this.loginButtonInitialWidth.interpolate({
			inputRange: [10, 40],
			outputRange: [limeGreenDark, limeGreen],
		});

		return (
			<Animated.View
				style={[
					styles.loginButtonContainer,
					{ width: loginButtonContainerWidth, backgroundColor: loginBackgroundColor },
				]}
			>
				<TouchableOpacity
					style={styles.loginButton}
					onPress={this.login}
					disabled={this.state.isFetching}
				>
					<CustomTextAnimated style={[styles.loginButtonText, { opacity: loginButtonTextOpacity }]}>
						login
					</CustomTextAnimated>
					<Animated.View
						style={[styles.loginButtonDotsContainer, { opacity: this.loginDotsInitialOpacity }]}
					>
						<Animated.View
							style={[styles.loginButtonDot, { transform: [{ translateY: this.dot1 }] }]}
						/>
						<Animated.View
							style={[styles.loginButtonDot, { transform: [{ translateY: this.dot2 }] }]}
						/>
						<Animated.View
							style={[
								styles.loginButtonDot,
								{ transform: [{ translateY: this.dot3 }], marginRight: 0 },
							]}
						/>
					</Animated.View>
				</TouchableOpacity>
			</Animated.View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../assets/images/smile.png')} style={styles.logo} />
				<CustomText style={styles.title}>Friday's shop</CustomText>
				{this.state.wrongCredentials && (
					<CustomText style={styles.wrongCredentials}>Invalid email or password</CustomText>
				)}
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
					secureTextEntry={true}
				/>
				{this.renderLoginButton()}
				<Modal
					animationType="fade"
					transparent={true}
					visible={this.state.networkError}
					onRequestClose={this.closeModal}
				>
					<View style={styles.modalContainer}>
						<View style={styles.modalContent}>
							<CustomText style={styles.errorMessage}>
								Please check your network connection
							</CustomText>
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
