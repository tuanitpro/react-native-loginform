/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  AsyncStorage,
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
const BASE_URL = "http://ec2-52-27-149-161.us-west-2.compute.amazonaws.com";

const background = require('./background.png') ;
const lockIcon = require('./ic_lock.png');
const userIcon = require('./ic_user.png');
 var STORAGE_KEY = 'key_access_token';
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      userName: '',
      password: '',
    };
  }
componentWillMount() {
 

                           
}
  _onPressLogin (event) {
      let serviceUrl =  BASE_URL + "/oauth2/token";
      let userName = this.state.userName;
      let password = this.state.password;
      var access_token = '';


      let postData = "grant_type=password&username=" + userName + "&password=" + password;              

        fetch(serviceUrl,{
          method: "POST",
          
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: postData



        })
          .then((response) => response.json())
          .then((responseJSON) => {  
                
 var { navigate } = this.props.navigation;
               access_token = responseJSON.access_token; 
               if(access_token !=undefined){
                          try {
                              AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(responseJSON));
                                navigate('MainPage');
                            } catch (error) {
                              console.log('AsyncStorage error: ' + error.message);
                            }

                 
               }
               else{
                  Alert.alert('Login failure');
               }
               
          })
          .catch((error) => {
            console.warn(error);
          }); 

      
  }
  static navigationOptions = {
    title: 'Login',
     header: null,
  };
  render() {
     var { navigate } = this.props.navigation;
    return (
      <Image style={[styles.container, styles.background]}
        source = {background}  resizeMode="cover">
        <View style={styles.container}/>

          <View style={styles.wrapper}>
            

                      <View style={styles.inputWrap}>

                                  <View style={styles.iconWrap}>
                          <Image source={userIcon} resizeMode="contain" style={styles.icon}/>
                      </View>

                  <TextInput  style={styles.input} placeholder="Username" onChangeText={(userName) => this.setState({userName})} underlineColorAndroid="transparent"/>
                        </View>

 
                            <View style={styles.inputWrap}>

                    <View style={styles.iconWrap}>
                    <Image source={lockIcon} resizeMode="contain" style={styles.icon}/>
                      </View>


                      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true}  onChangeText={(password) => this.setState({password})} underlineColorAndroid="transparent"/>
                      </View>
       
        <TouchableOpacity activeOpacity={.5} onPress={this._onPressLogin.bind(this)} keyboardShouldPersistTaps={true}>
    <View style={styles.button}>
<Text style={styles.buttonText}> Login</Text>
      </View>      
         
    </TouchableOpacity>

    <TouchableOpacity activeOpacity={.5} onPress={() => navigate('ForgotPassPage')}>
      <View >
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>        
        </View>      
      </TouchableOpacity>


   <TouchableOpacity activeOpacity={.5} onPress={()=>navigate('SignUpPage')} keyboardShouldPersistTaps={true}>
    <View style={styles.button}>
<Text style={styles.buttonText}> Sign Up</Text>
      </View>      
         
    </TouchableOpacity>

          </View>                        

      

   
              
        <View style={styles.container}/>

       
        
     
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
  background:{
    width: null,
    height:null,
  },
  wrapper:{
      paddingHorizontal:15,
  },
  inputWrap:{
      flexDirection:"row",
      marginVertical: 5,
      height:36,
      backgroundColor:"transparent",
  },
  input:{
flex: 1,
paddingHorizontal: 5,
backgroundColor:'#FFF',
  },
iconWrap:{
paddingHorizontal:7,
alignItems: "center",
justifyContent: "center",
backgroundColor:"#d73352"
},
icon:{
width:20,
height:20,
},
button:{
backgroundColor:"#d73352",
paddingVertical: 8,
marginVertical:8,
alignItems: "center",
justifyContent: "center",
},


  buttonText: {
      fontSize: 16,
      color:'#FFFFFF',
      textAlign: 'center',
     
  },
  forgotPasswordText:{
    color:'#FFFFFF',
       backgroundColor:"transparent",
         textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

 

module.exports = LoginPage;