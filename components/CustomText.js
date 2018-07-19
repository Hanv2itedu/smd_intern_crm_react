import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';

export class CustomText extends Component {
    render() {
        return (
            <Text style={styles.container}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Helvetica',
        color: '#000'
    }
});