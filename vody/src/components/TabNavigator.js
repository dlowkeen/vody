import React from "react";
import { Text, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import Home from './home/Home';
import Search from './search/Search';
import Profile from './profile/Profile';
import SearchResults from './searchResults/SearchResults';
import SimpleForm from './search/SimpleForm';

export default TabNavigator({
  Home: { screen: Home },
  Search: { screen: StackNavigator(
    // { screen: Search },
    {  
      SimpleForm: { screen: SimpleForm },
      SearchResults: { screen: SearchResults }
    }
  )},
  Profile: { screen: Profile }
});
