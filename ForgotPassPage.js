'use strict';
import React, { Component } from 'react';
import {
 Image,
  Text,
  View,
  StatusBar,
  Navigator,
} from 'react-native';

 
import {
  StackNavigator,
} from 'react-navigation';

const BASE_URL = "http://ec2-52-27-149-161.us-west-2.compute.amazonaws.com";
class ForgotPassPage extends Component {
   


  componentWillMount() {
    
  }
   static navigationOptions = {
    title: 'Forgot Password',
     
  };
 
  

  render() {
  
    return (



      <View style={{flex: 1, backgroundColor: '#3399cc', alignItems: 'center', justifyContent: 'center'}}>
        
 <Text style={{color: 'white', fontSize: 32,}}>TUANITPRO.COM</Text>
       <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'}}
        />


      </View>
    );
  }
}

module.exports = ForgotPassPage;