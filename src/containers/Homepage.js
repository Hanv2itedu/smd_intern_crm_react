import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer, Header, Left, Right, Body, Button, Icon } from 'native-base';
import SquareBox from '../components/SquareBox';
import SideBar from '../components/SideBar';
import { PickerWithIcon } from '../components/PickerWithIcon';

export default class Homepage extends Component {
    closeDrawer() {
        this.drawer._root.close()
    };
    openDrawer() {
        this.drawer._root.open()
    };
    constructor(props) {
        super(props);
        this.state = {
            years: [2018,2017,2016,2015,2014],
            months: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
    } 

    render() {        
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
                <View>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.openDrawer()} >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body />
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
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
});