import React, {useState} from 'react';
import {
  View,
  Button,
  Dimensions,
  StyleSheet,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../Screens/Home';
import Setting from '../../Screens/Setting';
import Login from '../../Screens/Login';
import Details from '../../Screens/Details';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcon } from './vectorIcon';




const Tab = createBottomTabNavigator();

const Bottombar=()=> {
  

  return (

    <Tab.Navigator screenOptions={() => ({
      tabBarLabelStyle: {
        fontSize: 10,
      },
    })}>
  
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused,color,size}) => {
            return focused ? (
              <Ionicons name="home" size={25} color={'grey'} />
            ) : (
              <Ionicons name="home-outline" size={20}  />
            );
          },
          headerShown:false
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{

          tabBarLabel: 'Setting',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialCommunityIcons name={'clipboard-list'} size={25} color="grey" />
            ) : (
              <MaterialCommunityIcons name={'clipboard-list'} size={20} color="grey" />
            );
          },
          headerShown:false
        }}
      />
     <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          
          tabBarIcon: ({focused,color,size}) => {
            return focused ? (
               <AntDesign name="pluscircle" size={25}  />
            ) : (
              <AntDesign name="pluscircleo" size={20} color={color} />
            );
          },

          headerShown:false 
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{

          tabBarLabel: 'Details',
          tabBarIcon: ({focused}) => {
            return focused ? (
              <MaterialCommunityIcons name={'clipboard-list'} size={25} color="grey" />
            ) : (
              <MaterialCommunityIcons name="clipboard-list-outline" size={20} />
            );
          },

          headerShown:false
        }}
      />

    </Tab.Navigator>
  );
}

export default Bottombar;





