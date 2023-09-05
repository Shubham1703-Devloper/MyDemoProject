import {NavigationAction} from '@react-navigation/native';
import {Formik, FormikHelpers, FormikValues} from 'formik';
import React, {memo, useEffect, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
} from 'react-native';

import {Navigation} from '../../Auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import { Axioscall } from '../../Axioscall';
import slugify from 'slugify';


type Props = {
  navigation: Navigation;
};

type Object = { [key: string]: any };

const Login = ({navigation}: Props) => {

  const [email, setEmail] = useState<Object>({value: '', error: ''});
  const [password, setPassword] = useState<Object>({value: '', error: ''});

  var str:string = 'shubha os very simple'



 // some-string
console.log('stre==========>',slugify(str))

// if you prefer something other than '-' as separator
// slugify('some string', '_')  // some_string

  const Submit = async() => {
   console.log(email.value, 'submit: go to Dashbord', password.value);
   if(email.value.length>0 && password.value.length>0){
    await Apicall();
    navigation.navigate('Bottombar');
   }
  };

// Post Data on Api
  const Apicall=async()=>{
    try {
      await Axioscall.post('/posts', {
        "userId": 1,
    "id": 1565,
    "title": "erit",
    "body": "reprehenderit molestiae utniet architecto"
      })
       .then((Response: any)=>{
         let a = Response.data;
         return console.log("response", a);
       })
       // .catch((e)=>{
       //   console.log("WSError===>ee", e)  
       // })
    }catch (error) {
       console.log("WSError===>", error)  
   }
  }

 
   
 

  return (
    <View style={{flex: 1,padding:20}}>

      <SafeAreaView style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Login To SharePixels </Text>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.black_mode}></TouchableOpacity>
        </View>

       

        <View style={styles.logo_area}>
          {/* <Image source={require('../../../assets/images/theMate.jpg')} style={{width: 150, height: 150, borderRadius: 150/ 2}}  /> */}
        </View>
        <View style={styles.form}>
          <View style={styles.item}>
            <TextInput
              style={styles.input}
              placeholder={'Enter Email'}
              value={email.value}
              onChangeText={text => setEmail({value: text, error: ''})}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              returnKeyType="done"
              value={password.value}
              onChangeText={text => setPassword({value: text, error: ''})}
              secureTextEntry
              style={styles.input_margin}
              placeholder={'Enter Password'}
            />
            <TouchableOpacity>
              <Text style={styles.item_text}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.login}
              onPress={Submit}>
              <Text style={styles.login_text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.or}>
            <Text style={styles.or_text}>Login with</Text>
          </View>
          <View style={styles.social}>
            <TouchableOpacity style={styles.social_text}></TouchableOpacity>
            <TouchableOpacity style={styles.social_text}></TouchableOpacity>
            <TouchableOpacity style={styles.social_text}></TouchableOpacity>
          </View>
          <View style={styles.finish}>
            <Text style={styles.finish_text}>
              You have no Account?{' '}
              <TouchableOpacity>
                <Text style={styles.register}>Register</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: 'black',
  },
  link: {
    fontWeight: 'bold',
    color: 'skyblue',
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius:10
  },
  header: {
    marginTop: 20,
  },
  header_text: {
    color: '#525464',
    fontWeight: 'bold',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
  },
  logo_area: {
    alignItems: 'center',
    marginTop: 40,
  },
  form: {
    marginTop: 40,
  },
  item: {},
  input: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10,
    borderRadius:10
  },
  input_margin: {
    borderWidth: 1,
    borderColor: '#B0B0C3',
    marginTop: 10,
    backgroundColor: '#F7F7F7',
    padding: 17,
    marginLeft: 10,
    marginRight: 10,
    borderRadius:10
  },
  item_text: {
    color: '#525464',
    textAlign: 'right',
    marginRight: 10,
    marginTop: 10,
  },
  login: {
    backgroundColor: '#20C3AF',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 14,
  },
  or: {
    marginTop: 10,
  },
  or_text: {
    textAlign: 'center',
    color: '#525464',
    fontWeight: '100',
  },
  social: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
  },
  social_text: {
    padding: 10,
    width: 90,
    height: 60,
    // borderWidth: 1,
    borderColor: '#E2E2B0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  finish: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finish_text: {
    color: '#525464',
  },
  register: {
    textDecorationLine: 'underline',
    textAlign:'center',
    color: '#FFB19D',
  },
  black_mode: {
    marginEnd: 20,
  },
});

export default memo(Login);
