import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';

export default class Login extends Component {
  facebookAuth() {
    LoginManager.logInWithReadPermissions([
      'public_profile',
      'email',
      'user_photos'
    ]).then(function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.login("Login Success: " + result.grantedPermission);
      }
    }, function(error) {
        console.log("an error occurred: " + error);
    })
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.facebookAuth}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}