import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, View, TouchableOpacity, TouchableHighlight, StyleSheet, Image } from 'react-native';
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import * as actions from '../../actions';
const FBLogo = require("../../assets/images/FB-f-Logo__white_144.png");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.facebookAuth = this.facebookAuth.bind(this);
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

  render() {
    this.isUserLoggedIn();
    return <View style={{ flex: 1, backgroundColor: "#d122ff" }}>
        <View style={styles.container}>
          <Text style={styles.titleFont}>
            VODY
          </Text>
          {/* <Text style={styles.titleFont}>VODY</Text> */}
          <TouchableHighlight style={styles.container2} onPress={this.facebookAuth} underlayColor="transparent">
            <View style={styles.FBLoginButton}>
              <Image style={styles.FBLogo} source={FBLogo} />
              <Text style={styles.FBLoginButtonText} numberOfLines={1}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableHighlight>

          <Text style={styles.designer} numberOfLines={1}>
            Built by Donovan Lowkeen
          </Text>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    position: "absolute",
    width: "100%",
    height: "80%"
  },
  titleFont: {
    fontFamily: "Helvetica",
    fontSize: 45,
    textAlign: "center",
    paddingTop: 200,
    margin: 50,
    fontWeight: "700",
    color: "#FFFFFF"
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  FBLoginButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 200,
    paddingLeft: 2,
    backgroundColor: "rgb(66,93,174)",
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: "rgb(66,93,174)",
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  FBLoginButtonText: {
    color: "white",
    fontWeight: "600",
    fontFamily: "Helvetica neue",
    fontSize: 14.2,
    marginLeft: 18
  },
  FBLogo: {
    position: "absolute",
    height: 14,
    width: 14,
    left: 7,
    top: 7
  },
  designer: {
    fontSize: 10,
    textAlign: "center",
    bottom: -70,
    color: "#ffffff"
  }
});

const mapStateToProps = state => (
  {
    user: state.auth.user,
  }
);

export default connect(mapStateToProps, actions)(Login);
