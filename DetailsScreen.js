import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,date,Picker,CheckBox} from 'react-native';
import {SearchBar } from 'react-native-elements';
import DatePicker  from 'react-native-datepicker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
export default class DetailsScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }
  render() {
    return (
      <View>
        {/* <View>
          <SearchBar placeholder='Search the products list' /> 
       </View> */}
       <View>
        <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight: 'bold',fontSize: 20,justifyContent:'flex-start'}}> Milk Profile</Text>
              <Text style={{ fontSize: 15, justifyContent:'flex-end'}}> Record Milk data</Text>
        </View>
        <View style={{ backgroundColor: 'transparent', margin: 10,borderRadius: 4,borderWidth: 1.,borderColor: 'red'}}>
          <DatePicker date={this.state.date} showIcon={true} mode="date" format="DD-MM-YYYY"
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  height: 50,
                  width: 200,
                  right: 20,
                },
                dateText: {
                  marginTop: 5,
                  color: 'white',
                  fontSize: 18,
                  right: 20,
                }
              }}
              onDateChange={(date) => { this.setState({ date: date }) }} placeholder="Birthday" placeholderTextColor="white" underlineColorAndroid={'rgba(0,0,0,0)'} style={{ height: 50, width: 400, paddingLeft: 15, borderRadius: 4, backgroundColor: 'rgba(0,0,0,0.4)' }}>
          </DatePicker>
        </View>
        <View style={{borderRadius: 4,borderWidth: 1.,borderColor: 'red',left: 10,width:'95%',marginTop: 5}}>
          <Picker
            style={{width:'95%'}}
            selectedValue={this.state.PickerValue}
            onValueChange={(itemValue,itemIndex) => this.setState({PickerValue:itemValue})}>
            <Picker.Item label="cattle" value="cattle" />
            <Picker.Item label="breed" value="breed"/>
          </Picker>
        </View>
      </View>
      <View style={{flexDirection:'row',marginTop: 10}}>
        <Text style={{fontWeight: 'bold',fontSize: 20,justifyContent:'flex-start'}}>Capture Quality Measurements?</Text>
        <View>
          <CheckBox center title='Click Here'checked={this.state.checked}/>
        </View>
      </View>
    </View>
    );
  }
}