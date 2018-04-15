import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, View, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import * as actions from '../../actions';

class Login extends Component {
  facebookAuth() {
    LoginManager.logInWithReadPermissions([
      'public_profile',
      'email'
    ]).then(function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log("Login Success: " + result.grantedPermissions);
        this.props.loginSuccess();
        // this.props.navigation.navigate('TabNavigation');
      }
    }, function(error) {
        console.log("an error occurred: " + error);
    })
  }

  render() {
    console.log("this.props", this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.facebookAuth}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToProps, actions)(Login);
