'use strict';
import React, { Component } from 'react';
import {
 Image,
  Text,
  View,
  StatusBar,
  Navigator,
    AsyncStorage,
} from 'react-native';

 
import {
  StackNavigator,
} from 'react-navigation';
 var STORAGE_KEY = 'key_access_token';

class SplashPage extends Component {
   constructor(props) {
	  super(props);
	
	  
	}


  componentWillMount() {
    var pageUrl='LoginPage';
    var access_token = null;
                  try {
                       access_token=       AsyncStorage.getItem(STORAGE_KEY);
                            } catch (error) {
                              console.log('AsyncStorage error: ' + error.message);
                            }

                            console.log(access_token);
if(access_token !=null){
  pageUrl='MainPage';
}

   var { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate (pageUrl, null);
    }, 1000);
  }
   static navigationOptions = {
    title: 'Welcome',
     header: null,
  };
 
  

  render() {
  
    return (



      <View style={{flex: 1, backgroundColor: '#246dd5', alignItems: 'center', justifyContent: 'center'}}>
        
 <Text style={{color: 'white', fontSize: 32,}}>TUANITPRO.COM</Text>
       <Image
          style={{width: 350, height: 350}}
          source={{uri: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460'}}
        />


      </View>
    );
  }
}

module.exports = SplashPage;