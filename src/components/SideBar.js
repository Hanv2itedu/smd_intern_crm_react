import React, { Component } from 'react';
import { Container, List, ListItem, Text, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';

class SideBar extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#fff', flex: 1 }} >
          <LinearGradient 
          colors={['#008000', '#AAD4AA']} 
          style={{ flex: 30 }} 
          >
            <Text>Abc</Text>
          </LinearGradient>
          <List style={{ flex: 70 }} >
            <ListItem>
              <Text onPress={this.navigateToScreen('Home')}>Home</Text>
            </ListItem>
            <ListItem>
              <Text onPress={this.navigateToScreen('ListCustomer')}>List Customer</Text>
            </ListItem>            
          </List>
      </Container>
    );
  }
}
export default SideBar;
