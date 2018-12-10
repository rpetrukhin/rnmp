import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import CustomText from '../components/CustomText';

import styles from '../assets/styles/ProductItem.style';

export default class ProductItem extends Component {
    goBack = () => {
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </CustomText>
                </View>
                <TouchableOpacity
                    onPress={this.goBack}
                    style={styles.button}
                >
                    <CustomText style={styles.buttonText}>
                        All Products
                    </CustomText>
                </TouchableOpacity>
                <View style={styles.borderBottom} />
            </View>
        );
    }
}
