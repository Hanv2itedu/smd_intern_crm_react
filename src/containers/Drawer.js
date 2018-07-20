import React, { Component } from 'react';
import { StackNavigator,createDrawerNavigator } from 'react-navigation';
import {Button, Icon} from 'native-base';

import Homepage from './Homepage';
import ListCustomer from './ListCustomer';
import Login from './Login';

const DrawerMenu = createDrawerNavigator({
    Home:{
       screen: Homepage,
    },
    ListCustomer:{
        screen: ListCustomer,
        
     },
     

});

//const homeStack = StackNavigator({
//     homeScreen: {
//         screen: Homepage,
//         navigationOptions:{
//         title:'Home',
//         }
//     }
// });
 


export default class Drawer extends React.Component{

    render(){
        return( 
        <DrawerMenu />
        );
    }
}
