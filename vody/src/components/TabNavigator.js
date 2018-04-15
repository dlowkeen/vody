import React from "react";
import { Text, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from './home/Home';
import Search from './search/Search';
import Profile from './profile/Profile';
import SearchResults from './searchResults/SearchResults';
import SimpleForm from './search/SimpleForm';
import { Header } from 'native-base';

export default TabNavigator({
  Home: { screen: Home },
  Search: {
    screen: StackNavigator({
      SimpleForm: {
        screen: SimpleForm,
        navigationOptions: {
          header: null
        }
      },
      SearchResults: { screen: SearchResults }
    })
  },
  Profile: { screen: Profile }
});
