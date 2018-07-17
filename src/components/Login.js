import React from 'react';
import { ImageBackground, Text } from 'react-native';

const Login = () => {
    const { backgroundStyle } = styles;
    return (
        <ImageBackground 
            style={backgroundStyle}
            source={require('../../resource/image/login-background.jpg')} 
            resizeMode='cover'
        >
            <Text>Hello</Text>
        </ImageBackground>
    );
}

const styles = {
    backgroundStyle: {
        width: '100%',
        height: '100%',
    }
}

export default Login;