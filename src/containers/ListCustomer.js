import React, { Component } from 'react';
import { Container, Content, Text, Button, View,Header,Left,Right,Body,Icon,Title } from 'native-base';
import CardCustomer from '../components/CardCustomer';

export default class ListCustomer extends Component {

  state = {
    customers: [],
  };
  componentWillMount() {
    this.setState({ customers: dataCustomers });
  }

  renderCustomer() {
    return this.state.customers.map(customer =>
      <CardCustomer key={customer.id} customer={customer} />
   ); 
  }

  render() {
    console.log(this.state);
    return (
      
      <Container>
         <Header style={{backgroundColor:'green'}}>
            <Left>
                <Button transparent onPress={()=>{this.props.navigation.openDrawer();}} >
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
              <Title>List CusTomer</Title>
            </Body>
            <Right />
        </Header>   
        <Content>
        <View style={styles.containerButtonStyle}>
          <Button rounded warning>
          <Icon name='search' />
          </Button>
        </View>
            {this.renderCustomer()}
        </Content>
     </Container>
    );
  }
}

const styles = {
  containerButtonStyle: { 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
    marginTop: 20 
  }
};

const dataCustomers = [
  {
    id: 1,
    name: 'Yaositing',
    seller: 'Taylor',
    phone: '0979884312',
    email: 'yao@gmail.com',
    gender: 'female',
    status: 'lead',
    company: 'Robo'
  },
  {
    id: 2,
    name: 'Obama',
    seller: 'Micheal',
    phone: '0931234619',
    email: 'Obama@gmail.com',
    gender: 'male',
    status: 'prospect',
    company: 'Rostoh'
  },
  {
    id: 3,
    name: 'Putin',
    seller: 'Micheal',
    phone: '0931236852',
    email: 'Putin@gmail.com',
    gender: 'male',
    status: 'active',
    company: 'putin'
  },
  {
    id: 4,
    name: 'Clare',
    seller: 'Taylor',
    phone: '0979884312',
    email: 'clare@gmail.com',
    gender: 'female',
    status: 'lead',
    company: 'Asmart'
  },
  {
    id: 5,
    name: 'Hara Saoi',
    seller: 'Taylor',
    phone: '0931234619',
    email: 'osama@gmail.com',
    gender: 'female',
    status: 'prospect',
    company: 'Yamaha'
  },
  {
    id: 6,
    name: 'Putin',
    seller: 'Micheal',
    phone: '0931236852',
    email: 'Putin@gmail.com',
    gender: 'male',
    status: 'active',
    company: 'NewTech'
  },
  {
    id: 7,
    name: 'Yaositing',
    seller: 'Taylor',
    phone: '0979884312',
    email: 'yao@gmail.com',
    gender: 'female',
    status: 'lead',
    company: 'Robo'
  },
  {
    id: 8,
    name: 'Obama',
    seller: 'Micheal',
    phone: '0931234619',
    email: 'Obama@gmail.com',
    gender: 'male',
    status: 'prospect',
    company: 'Rostoh'
  },
  {
    id: 9,
    name: 'Hara Saoi',
    seller: 'Taylor',
    phone: '0931234619',
    email: 'osama@gmail.com',
    gender: 'female',
    status: 'prospect',
    company: 'Yamaha'
  },
];
