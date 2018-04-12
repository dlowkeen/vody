import React from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Home from './Home';
import Search from './Search';

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

export default TabNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  Settings: { screen: SettingsScreen }
});
