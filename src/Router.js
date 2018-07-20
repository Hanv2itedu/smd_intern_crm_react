import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from './containers/Login';
import Drawer from './containers/Drawer';

export const LoginStack = StackNavigator({
    loginScreen: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    homeScreen: {
        screen: Drawer,
        navigationOptions: {
            header: null,
        }
    },

});
