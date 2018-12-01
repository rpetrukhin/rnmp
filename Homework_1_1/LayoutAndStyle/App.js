import React, { Component } from 'react';

import Login from './screens/Login';
import Products from './screens/Products';
import ProductItem from './screens/ProductItem';

const SCREENS = {
    login: 'login',
    products: 'products',
    productItem: 'productItem',
}

export default class App extends Component {
    state = {
        screen: SCREENS.login,
        productItemTitle: null,
        productItemImageSource: null,
    }

    switchToProducts = () => {
        this.setState({ screen: SCREENS.products });
    }

    switchToSpecificProduct = (title, imageSource) => {
        this.setState({
            screen: SCREENS.productItem,
            productItemTitle: title,
            productItemImageSource: imageSource,
        });
    }

    render() {
        switch (this.state.screen) {
            case SCREENS.login:
                return (
                    <Login
                        login={this.switchToProducts}
                    />
                );
            case SCREENS.products:
                return (
                    <Products
                        showDetails={this.switchToSpecificProduct}
                    />
                );
            case SCREENS.productItem:
                return (
                    <ProductItem
                        title={this.state.productItemTitle}
                        imageSource={this.state.productItemImageSource}
                        showAllProducts={this.switchToProducts}
                    />
                );
        }
    }
}
