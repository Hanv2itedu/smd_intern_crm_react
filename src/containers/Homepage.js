import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer, Header, Left, Button, Icon, Content,Text, Body, Title, Right } from 'native-base';
import SquareBox from '../components/SquareBox';
import SideBar from '../components/SideBar';
import { PickerWithIcon } from '../components/PickerWithIcon';

export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: [2018,2017,2016,2015,2014],
            months: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    } 

    render() {        
        return (
                <View>
                    <Header style={{backgroundColor:'green'}}>
                        <Left>
                            <Button transparent onPress={()=>{this.props.navigation.openDrawer();}} >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Home</Title>

                        </Body>
                        <Right />
                    </Header>                
                    <View style={styles.row}>
                        <PickerWithIcon items={this.state.years}/>
                        <PickerWithIcon items={this.state.months}/>
                    </View>
                    <View>
                        <View style={styles.row}>
                            <SquareBox title="PROSPECT"></SquareBox>
                            <SquareBox title="LEAD"></SquareBox>
                        </View>
                        <View style={styles.row}>
                            <SquareBox title="POTENTIAL"></SquareBox>
                            <SquareBox title="ACTIVE"></SquareBox>
                        </View>
                    </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});