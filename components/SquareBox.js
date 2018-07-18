import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { CustomText } from './CustomText'

export default class SquareBox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CustomText style={{flex: 1}}><Text style={styles.title}>{this.props.title}</Text></CustomText>
                <CustomText style={{flex: 1}}><Text style={styles.number}>12</Text></CustomText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#e74c3c',
        elevation: 2,
        margin: 20,
        padding: 30,
        backgroundColor: '#e74c3c',
    },
    title: {
        color: '#fff',
        fontSize: 14
    },
    number: {
        color: '#007bff',
        fontSize: 30
    }
});