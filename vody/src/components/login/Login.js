import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, View, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import * as actions from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.facebookAuth = this.facebookAuth.bind(this);
    this.randomStuff = this.randomStuff.bind(this);
    this.isUserLoggedIn = this.isUserLoggedIn.bind(this);
  }

  isUserLoggedIn() {
    if (this.props.user == "user") {
      console.log("User logged in");
      this.props.navigation.navigate('TabNavigation');
    } else {
      console.log("User is NOT logged in");
    }
  }

  facebookAuth() {
    LoginManager.logInWithReadPermissions([
      'public_profile',
      'email'
    ]).then((result) => {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log("Login Success: " + result.grantedPermissions);
        this.props.loginSuccess("user");
      }
    }, function(error) {
        console.log("an error occurred: " + error);
    })
  }

  randomStuff() {
    console.log('this.props', this.props);
  }

  render() {
    console.log("this.props", this.props);
    this.isUserLoggedIn();
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={this.facebookAuth}>
          <Text>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.randomStuff}>
          <Text>Stuff</Text>
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
