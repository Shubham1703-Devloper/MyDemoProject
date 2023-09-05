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
import {Axioscall} from '../../Axioscall';

type Props = {
  navigation: Navigation;
};

const Home = ({navigation}: Props) => {
  const [userdata, setUserdata] = useState<Array<any>>([]);

  useEffect(() => {
    // Apicall();
  }, []);

  const Submit = () => {
    console.log(userdata, 'submit: go to userdata');
    navigation.navigate('Setting');
  };
  // Post Data on Api
  const Apicall = async () => {
    try {
      await Axioscall.get('/user').then((Response: any) => {
        let a = Response.data;
        setUserdata(a);
        return console.log('response', a);
      });
      // .catch((e)=>{
      //   console.log("WSError===>ee", e)
      // })
    } catch (error) {
      console.log('WSError===>', error);
    }
  };


  // Post Data on Api
  const UpdateApicall = async () => {
    try {
      await Axioscall.put('/user/1').then((Response: any) => {
        let a = Response.data;
        return console.log('response', a);
      });
      // .catch((e)=>{
      //   console.log("WSError===>ee", e)
      // })
    } catch (error) {
      console.log('WSError===>', error);
    }
  };

  return (
    <View style={{flex: 1, padding: 40}}>
      <Button title="Setting" onPress={Submit}></Button>
      <Button title="Update" onPress={UpdateApicall}></Button>
      <Button title="GetName" onPress={Apicall}></Button>
      <Text>{userdata[0]?.firstName}</Text>
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
});

export default memo(Home);
