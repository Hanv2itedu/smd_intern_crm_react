import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';

export default class ListExample extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: '#fff', paddingTop: 20 }} >
        <Content>
          <List >
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
        </Content>
      </Container>
    );
  }
}