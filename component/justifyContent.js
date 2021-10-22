import React, { Component } from 'react';
import { View } from 'react-native';

export default class Example extends Component {
    render() {
        return (
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ height: 50, width: 50, backgroundColor: 'red' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'black' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'green' }} />
            <View style={{ height: 50, width: 50, backgroundColor: 'blue' }} />
        </View>
        );
    }
}