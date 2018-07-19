import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {

    render() {
        return (
            <ImageBackground 
                style={styles.backgroundStyle}
                source={require('../../resource/image/login-background.jpg')} 
                resizeMode='cover'
            >
                <LoginForm navigation={this.props.navigation} />
            </ImageBackground>
        );
    }
   
}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: '100%',
    }
});
