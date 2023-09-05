import React, {memo, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../Screens/Home';
import Setting from '../Screens/Setting';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screens/Login';
import Bottombar from './Bottombar';
import Details from '../Screens/Details';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: true}}
        />
        <Stack.Screen name="Setting" component={Setting} />


        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />


        <Stack.Screen
          name="Bottombar"
          component={Bottombar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(Auth);


export type Navigation = {
    navigate: (scene: string) => void;
  };
