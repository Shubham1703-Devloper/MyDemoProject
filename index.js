/**
 * @format
 */

import {Alert, AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async remoteMessage => {
  Alert.alert('Message handled in the background!', remoteMessage);
});


AppRegistry.registerComponent(appName, () => App);
