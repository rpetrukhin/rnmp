import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/Login.style';

export default class Login extends Component {
    state = {
        email: null,
        password: null,
        error: false,
    }

    handleChangeEmail = (value) => {
        this.setState({ email: value });
    }

    handleChangePassword = (value) => {
        this.setState({ password: value });
    }

    login = () => {
        const body = {
            username: this.state.email,
            password: this.state.password,
        }

        fetch(
            'http://ecsc00a02fb3.epam.com/index.php/rest/V1/integration/customer/token',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }
        )
            .then(res => res.json())
            .then(data => {
                if (!data.message) {
                    this.props.navigation.navigate('Main');
                } else {
                    this.setState({ error: true });
                }
            })
            .catch(err => {
                this.setState({ error: true });
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/smile.png')}
                    style={styles.logo}
                />
                <CustomText style={styles.title}>
                    Friday's shop
                </CustomText>
                {this.state.error &&
                    <CustomText style={styles.error}>
                        Invalid email or password
                    </CustomText>
                }
                <TextInput
                    style={styles.input}
                    placeholder='email'
                    value={this.state.email}
                    onChangeText={this.handleChangeEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    value={this.state.password}
                    onChangeText={this.handleChangePassword}
                />
                <TouchableOpacity
                    onPress={this.login}
                    style={styles.loginButton}
                >
                    <CustomText style={styles.loginButtonText}>
                        login
                    </CustomText>
                </TouchableOpacity>
            </View>
        );
    }
}
