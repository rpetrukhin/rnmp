import React, { Component } from 'react';
import { View } from 'react-native';

import CustomText from '../components/CustomText';
import Product from '../components/Product';

import styles from '../assets/styles/Products.style';

export default class Products extends Component {
    showDetails = (name, imageSource) => {
        this.props.navigation.navigate('ProductItem', {
            title: name,
            imageSource: imageSource,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomText style={styles.title}>
                    Products
                </CustomText>
                <Product
                    imageSource={require('../assets/images/map.png')}
                    name='Product 1'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/smile.png')}
                    name='Product 2'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/star.png')}
                    name='Product 3'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/camera.png')}
                    name='Product 4'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/gift.png')}
                    name='Product 5'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/plus.png')}
                    name='Product 6'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/shopping-cart.png')}
                    name='Product 7'
                    showDetails={this.showDetails}
                />
                <Product
                    imageSource={require('../assets/images/football-ball.png')}
                    name='Product 8'
                    showDetails={this.showDetails}
                />
            </View>
        );
    }
}
