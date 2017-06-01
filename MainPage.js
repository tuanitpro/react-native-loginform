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
  View,
  Image,
 ScrollView,
   AsyncStorage,
  TouchableOpacity,
   
} from 'react-native';
var STORAGE_KEY = 'key_access_token';
const background = require('./bg_quotes.jpg') ;

export default class MainPage extends Component {
   static navigationOptions = {
    title: 'Welcome',
    header:null,
  };
    constructor(props) {
    super(props);
  
    this.state = {
      quote: 'Cuộc sống không bao giờ là bế tắc thực sự nếu con người ta dám rời bỏ lối mòn & dũng cảm tìm ra giá trị mới.',
      author: 'Khuyết danh',
      username: '',
    };
  }
  
  componentWillMount() {
    try {
    AsyncStorage.getItem(STORAGE_KEY).then((user_data_json) => {
    let userData = JSON.parse(user_data_json);
        if(userData ==undefined){
              var { navigate } = this.props.navigation;
              navigate('LoginPage');
        }else{
          this.setState({
            username: userData.userName,
          });
        }
this._onChangeText();
    });

    } catch (error) {
            console.log('AsyncStorage error: ' + error.message);
    }          

    
     
    }
    _onChangeText(event){
     fetch('http://tuanitpro.com/android/api.php',{
          method: "GET",
           
            })
          .then((response) => response.json())
          .then((responseJSON) => {  
                 let dataArray = responseJSON;
               
              
                 var max = dataArray.length;
                 var min  = 1;
                 var randIndex = Math.floor(Math.random() * (max - min + 1)) + min;
                var item = dataArray[randIndex];
                if(item !=undefined){
                  this.setState({
                  quote : item.content,
                  author : item.author
                  });
                  
                }
                console.log(item);

          })
          .catch((error) => {
            console.warn(error);
          }); 
    }
 _onPressLogOut (event) {
       try {
AsyncStorage.removeItem(STORAGE_KEY);
 
          var { navigate } = this.props.navigation;
          navigate('LoginPage');
} catch (error) {
        console.log('AsyncStorage error: ' + error.message);
}

       
    
 }

 render() {
    return (
        <Image style={[styles.container, styles.background]}
        source = {background}  resizeMode="cover">
        <View style={styles.container}>
 
          <View style={styles.wrapper}>
           <View style={styles.contents}>

 <TouchableOpacity activeOpacity={.5} onPress={this._onChangeText.bind(this)} keyboardShouldPersistTaps={true}>
            <Text style={styles.quotes}>{this.state.quote}</Text>
              <Text style={styles.author}>{this.state.author}</Text>

  </TouchableOpacity> 

      </View>


   </View>
   </View>

   <View style={styles.footer}>
        <TouchableOpacity activeOpacity={.5} onPress={this._onPressLogOut.bind(this)} keyboardShouldPersistTaps={true}>
    <View style={styles.button}>
<Text style={styles.buttonText}>Hi {this.state.username} Logout</Text>
      </View>      
      
    </TouchableOpacity> 
   
</View>
       </Image>
    );
  }
  
  
}
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
  footer: {
  position: 'absolute',
  flex:1,
  left: 0,
  right: 0,
  bottom: -10,
 
},
  background:{
    width: null,
    height:null,
  },
  wrapper:{
      paddingHorizontal:15,
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
  
  contents:{
        marginTop: 100,        
        backgroundColor: 'rgba(52, 52, 52, 0.3)'
  },
  quotes: {
     fontSize: 18,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  author: {
    textAlign: 'right',
    color: '#FFFFFF',
    marginBottom: 5,
  },
});
