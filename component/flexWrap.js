import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class Example extends Component {
    render() {
        return (
        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'nowrap' }}>
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
            <View style={styles.boxStyle} />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    boxStyle: {
        height: 100, 
        width: 50, 
        borderWidth: 1, 
        backgroundColor: 'orange', 
        marginBottom: 5
    },
});