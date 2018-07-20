import React, { Component } from 'react';
import { Container, List, ListItem, Text, View } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class ListExample extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#fff', flex: 1 }} >
          <LinearGradient 
          colors={['#FF3B30', '#F5981F']} 
          style={{ flex: 3 }} 
          >
            <Text>Abc</Text>
          </LinearGradient>
          <List style={{ flex: 7 }} >
            <ListItem>
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
          </List>
      </Container>
    );
  }
}