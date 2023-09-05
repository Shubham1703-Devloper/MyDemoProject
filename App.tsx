import React, { memo, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import Auth from './src/Auth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Axioscall } from './src/Axioscall';


const App=()=>{
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Auth/>
    </GestureHandlerRootView>
   
  );
};


export default memo(App);