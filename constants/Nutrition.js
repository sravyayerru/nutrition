import React, {Component} from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,TextInput,ScrollView} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper';
import { withNavigation } from 'react-navigation';

class Breed extends Component {
    render() {
      return( 
        <ScrollView>
              <View style={styles.box}>
              <View style={styles.SectionStyle}>
        <TextInput 
          underlineColorAndroid = "transparent"
          placeholder = "Search Cattle"
          placeholderTextColor = "gray"
          autoCapitalize = "none"
        />
        <View style={{flexDirection: 'row',}}>
          <Icon style={styles.searchIcon} name="ios-search" size={30} color="#000"/>
            <Icon style={styles.baricon} name="ios-barcode" size={30} color="#000"/> 
        </View>
      </View>
      <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:2}}>
                          <View>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home1')}>
                    <Image source = {require('../asserts/Milkdata.png')} style={styles.images}/>
                      <Text style={{margin:10}}>Milk Data</Text>
                  </TouchableOpacity>
                          </View> 

                          <View>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home3')}>
                    <Image source = {require('../asserts/fp.png')} style={styles.images}/>
                      <Text style={{margin:10}}>Lactation graph</Text>  
                  </TouchableOpacity>         
                          </View>      
                    </View>  

                      <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
                          <View>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home2')}>
                    <Image source = {require('../asserts/inventory.png')} style={styles.images}/>
                    <Text style={{margin:10}}>Persistancy graph</Text> 
                  </TouchableOpacity>
                          </View> 

                          <View>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home3')}>
                    <Image source = {require('../asserts/fp.png')} style={styles.images}/>
                      <Text style={{margin:10}}>Semen stock</Text>  
                  </TouchableOpacity>
                          </View>      
                      </View>

                      <View style={{marginLeft:20,flexDirection:'row',justifyContent:'space-around',marginTop:25}}>
                          <View>
                          <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home2')}>
                  <Image source = {require('../asserts/inventory.png')} style={styles.images}/>
                    <Text style={{margin:10}}>Medicine stock</Text> 
                </TouchableOpacity> 
                          </View>  

                                
                       </View>

                    <View style={{borderWidth:1,borderColor: 'gray', height: 60, margin: 20,flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <Swiper style={{marginBottom:40}}>
                                <View style={styles.slide1}>
                                  <Text style={styles.text}>Promotion/Notiofecation Banner</Text>
                                </View>
                                <View style={styles.slide2}>
                                  <Text style={styles.text}>Beautiful</Text>
                                </View>
                                <View style={styles.slide3}>
                                  <Text style={styles.text}>And simple</Text>
                                </View>
                        </Swiper>
                    </View>
              </View>

              <View style={styles.footer}>
                  <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home1') }>
                    <Image source = {require('../asserts/8.png')}/>
                </TouchableOpacity>
                </View>
          </ScrollView>  
      ); 
  
    }
  }

  const styles = StyleSheet.create({
    box:{
      marginTop:10,
      backgroundColor:'white',
      height:'88%'
   },
   box2:{
     justifyContent:'center',
     alignItems:'center',
     marginTop:10,
     backgroundColor:'white',
     height:40
   },
   images:{
     width:50,
     height:50
   },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  text: {
    color: 'gray',
    fontSize: 15
  },
  footer:{
    alignItems:'center',
    justifyContent:'center',
  },
baricon:{
alignItems:'flex-end',
  paddingLeft:15,
  paddingRight:15,
  paddingBottom:5,
  paddingTop:5,
 borderLeftWidth:1,
 marginTop:10,
 marginBottom:10
},
searchIcon: {
  alignItems:'flex-end',
  padding:10
},
SectionStyle: {
  flexDirection:'row',
  justifyContent:'space-between',
  borderWidth: 1,
  borderColor: 'gray',
  height: 50,
  margin: 20,
  marginTop:10,
  position:'relative'
},
images1:{
  width:50,
  height:50,
 marginLeft:40
},
footer:{
     justifyContent:'center',
     alignItems:'center',
     marginTop:10,
     backgroundColor:'white',
     height:40
   },
 });

 export default withNavigation(Breed);