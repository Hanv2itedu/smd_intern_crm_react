import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './containers/Login';
import Home from './containers/Homepage';

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
