/**
 * Project Login, SignUp
 * Author Name: Thanh Tuan Le
 * Author Email: tuanitpro@gmail.com
 * Author URI: http://tuanitpro.com
 * Author FB: https://facebook.com/tuanitpro
 * Description:
 * This simple App make with love React Native
 * Download source code:
 * https://github.com/tuanitpro/react-native-weather-app
 * Donate: 
 * BTC Address: 1MXE6ZHSkNrZ2s6XYXtFhpgwRc8Hhuc9fr
 * Paypal: https://www.paypal.me/tuanitpro/5
 */

import React, { Component } from 'react';
import {
  AppRegistry,
 
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';


 import MainPage from './MainPage.js';
 import SplashPage from './SplashPage.js';
 import LoginPage from './LoginPage.js';
 import ForgotPassPage from './ForgotPassPage.js';
 import SignUpPage from './SignUpPage.js';



const MyApp = StackNavigator({
  SplashPage: { screen: SplashPage },
  MainPage: { screen: MainPage },
  LoginPage: { screen: LoginPage },
  ForgotPassPage: { screen: ForgotPassPage },
  SignUpPage: {screen: SignUpPage}
});
AppRegistry.registerComponent('bookClientApi', () => MyApp);
