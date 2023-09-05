import {Formik, FormikHelpers, FormikValues} from 'formik';
import React, {memo, useEffect, useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ImageBackground,
  ScrollView,
  FlatList,
  StatusBar,
} from 'react-native';
import {Navigation} from '../../Auth';

type Props = {
  navigation: Navigation;
};

const imagesdata = [
  {
    id: 1,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 2,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 3,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 4,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 5,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 6,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 7,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },

  {
    id: 8,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },

  {
    id: 9,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 10,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 11,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 12,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 13,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 14,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 15,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 16,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 17,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 18,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 19,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 20,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 21,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 22,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 23,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 24,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 25,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 26,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 27,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 28,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 29,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 30,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 31,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 32,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 33,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 34,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 35,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
  {
    id: 36,
    uri: 'https://legacy.reactjs.org/logo-og.png',
  },
];



const Setting = ({navigation}: Props) => {

  const [paging,setPaging] = useState(0);
  var data = new Array([])

  useEffect(()=>{
    PageDatacall()
  },[])


const onLoadcall=()=>{
setPaging(paging+1)
var count:number = 0
imagesdata.forEach(element => {
  count++
  if(count==10 * paging){
  //  data.push(element)
  }
});
}

const PageDatacall=()=>{
  setPaging(1)
  }

  return (
    <ScrollView style={{padding: 20}}>
      <FlatList
        initialNumToRender={10}
        data={imagesdata}
        renderItem={({item}) =>{
          return(<Item title={item.uri}/>)
      }}
      refreshing={true}
      // onScroll={()=>{
      //   console.log("scroll");
      // }}
      onEndReached={onLoadcall}
      onEndReachedThreshold={0}
      ListFooterComponent={()=>{
       return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>{'Loading...'}</Text>
        </View>
       )
        
      }}
      />
      <View style={{flex: 1, padding: 40}}>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default memo(Setting);

type ItemProps = {title: string};
const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <ImageBackground
      style={{width: '100%', height: 600}}
      resizeMode={'cover'}
      source={{
        uri: title,
      }}></ImageBackground>
  </View>
);
