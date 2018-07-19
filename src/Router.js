import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import Home from './components/Home';

export const LoginStack = StackNavigator({
    loginScreen: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    homeScreen: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
        }
    },

});
