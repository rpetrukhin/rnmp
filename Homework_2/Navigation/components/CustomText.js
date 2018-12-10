import React, { Component } from 'react';
import { Text } from 'react-native';

import { graphite } from '../assets/styles/epamStyles';

export default class CustomText extends Component {
    render() {
        return (
            <Text
                {...this.props}
                style={[{ fontFamily: 'vincHand', color: graphite }, this.props.style]}
            >
                {this.props.children}
            </Text>
        );
    }
}
