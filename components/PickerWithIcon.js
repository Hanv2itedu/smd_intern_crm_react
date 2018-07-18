import React, { Component } from "react";
import { Icon, Picker } from "native-base";
export class PickerWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >

            {this.props.items.map((value, index) => <Picker.Item key={index} label={value.toString()} value={"key"+ index} />)}
            </Picker>
    );
  }
}