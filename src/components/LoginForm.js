import React, { Component } from 'react';
import { Form, Item, Input, Content, Card, CardItem, Text, Button } from 'native-base';
import { StyleSheet, Alert } from 'react-native';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  }

  handleUsername = (text) => {
    this.setState({ username: text });
  }
  handlePassword = (text) => {
    this.setState({ password: text });
  }
  checkValidUser = (username, password) => (username === 'admin' && password === 'admin');

  goToHome = () => {
    const isValid = this.checkValidUser(this.state.username, this.state.password);
    if (isValid) {
      this.props.navigation.navigate('homeScreen');
    } else {
      Alert.alert(
        'Error',
        'Incorrect username or password',
        [
          { text: 'close' }
        ],
        { cancelable: false }
      );
    }
  }

  render() {
    return (
        <Content
            style={styles.contentStyle}
            padder
        >
          <Card>
            <CardItem
              style={styles.headerTextStyle} 
              header bordered
            >
              <Text>LOGIN</Text>
            </CardItem>
              <Form>
                <Item>
                 <Input 
                  onChangeText={this.handleUsername}
                  placeholder="Username" 
                 />
                </Item>
                <Item>
                 <Input     
                    secureTextEntry={true} 
                    placeholder="Password" 
                    onChangeText={this.handlePassword}
                 />
                </Item>
              </Form>
              <Button 
                  onPress={this.goToHome}
                  style={styles.buttonStyle}
                  rounded block info
              >
              <Text> Enter </Text>
              </Button>
            </Card>
          </Content>
    );
  }
}

const styles = StyleSheet.create(
  {

    contentStyle: {
       marginTop: 100,
    },

    headerTextStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    buttonStyle: {
      margin: 10,
      marginTop: 20,
      marginBottom: 30,
    },
  }
);
