/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import Robot from './component/Robot'
import App from './component/ActivityIndicator';
// import HelloWorld from './component/HelloWorld';

AppRegistry.registerComponent(appName, () => App);
