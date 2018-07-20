import React, { Component } from 'react';
import { Accordion, Card, CardItem, Text, View } from 'native-base';


export default class CardCustomer extends Component {
   
    
  componentWillMount() {
      this.dataArray = [
          { 
            title: this.props.customer.seller, 
            content: {
            phone: this.props.customer.phone,
            email: this.props.customer.email,
            gender: this.props.customer.gender,
            status: this.props.customer.status,
            company: this.props.customer.company,
          }, 
         }
     ];
  }

  // dataArray = [];

  renderContent = (content) => (
    <View style={styles.contentStyle}>
      {renderRow('phone:', content.phone)}
      {renderRow('email:', content.email)}
      {renderRow('gender:', content.gender)}
      {renderRow('status:', content.status)}
      {renderRow('company:', content.company)}
    </View>
  )
 
  
  render() {
    console.log(this.state);
    return (
          <Card style={styles.cardStyle}>
            <CardItem header style={styles.cardItemStyle}>
              <Text>{this.props.customer.name.toUpperCase()}</Text>
            </CardItem>      
              <Accordion 
                dataArray={this.dataArray} 
                headerStyle={styles.accorHeaderStyle}
                renderContent={this.renderContent}
              />
         </Card>
    );
  }
}


const renderRow = (field, fieldContent) => (
   <View style={styles.rowStyle}>
      <View style={styles.fieldStyle}>
         <Text style={styles.textStyle}>{field}</Text>
      </View>
      <View style={styles.fieldContentStyle}>
      <Text style={styles.textStyle}>{fieldContent}</Text>   
      </View>
    </View>
);

const styles = {

  cardStyle: { 
    marginTop: 15,
    marginLeft: 5,
    marginRight: 5, 
  },

  cardItemStyle: {
    backgroundColor: '#ffffee',
  },
  accorHeaderStyle: {
    backgroundColor: '#17a2b8',
  },
  contentStyle: {
     backgroundColor: '#17a2b8',
     paddingBottom: 10,
  },
  rowStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },
  fieldStyle: {
    flex: 1,
  },
  fieldContentStyle: {
    flex: 2,
  },
  textStyle: {
    color: '#fff'
  }
};
