import React from "react";
import { Text, View } from "react-native";
import { TabNavigator } from "react-navigation";
import Home from './home/Home';
import Search from './search/Search';
import Profile from './profile/Profile';

export default TabNavigator({
  Home: { screen: Home },
  Search: { screen: Search },
  Profile: { screen: Profile }
});
