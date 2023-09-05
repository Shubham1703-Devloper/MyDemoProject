import { Formik, FormikHelpers, FormikValues } from 'formik';
import React, { memo, useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, View, Text, Button} from 'react-native';

const Details = (Props) => {
  
  
  const Submit=()=>{
    Props.navigation.navigate('Setting')
  }



  return (
    <View style={{flex:1,padding:40}}>
       <Button title='Setting' onPress={Submit}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default memo(Details);