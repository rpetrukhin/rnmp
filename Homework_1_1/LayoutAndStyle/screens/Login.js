import React, { Component } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/Login.style';

export default class Login extends Component {
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
                <TextInput
                    style={styles.input}
                    placeholder='email'
                />
                <TextInput
                    style={styles.input}
                    placeholder='Text box'
                />
                <TouchableOpacity
                    onPress={this.props.login}
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
