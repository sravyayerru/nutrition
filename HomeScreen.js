import * as React from 'react';
import { View,Text,StyleSheet, Dimensions,Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Registration from './constants/Registration';
import Health from './constants/Health';
import Breed from './constants/Breed';
import Nutrition from './constants/Nutrition';
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Registration',icon: require('./asserts/registration.png')},
      { key: 'second', title: 'Health' ,icon: require('./asserts/1.png')},
      { key: 'third', title: 'Breed',icon: require('./asserts/2.png') },
      { key: 'fourth', title: 'Nutrition',icon: require('./asserts/3.png') },
    ],
  };
}
  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => 
  <TabBar
    {...props}
     style={styles.header}
    indicatorStyle={{ backgroundColor: 'black' }}
    labelStyle={{color:'black', fontSize: 11}}
    renderIcon={this._renderIcon}
    />;

  _renderScene = SceneMap({
    first: Registration ,
    second: Health ,
    third: Breed,
    fourth: Nutrition,
  });
  _renderIcon = ({ route } ) => {
    return <Image source={route.icon} />;
  };
 
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Home/mooON Dashboard</Text>
          <TabView
              navigationState={this.state}
              renderScene={this._renderScene}
              renderTabBar={this._renderTabBar}                                              
              onIndexChange={this._handleIndexChange}
              initialLayout={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height
              }}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
 flex:1,
 },
 text:{
   marginLeft:10,
  backgroundColor:'white',
 },
 scene: {
  flex: 1,
},
header: {
  backgroundColor:'white'
},
});

