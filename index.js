/**
 * @format
 */

import i18next from 'i18next';
import {AppRegistry, I18nManager,LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


// LogBox.ignoreWarnings(['Remote debugger']);


I18nManager.forceRTL(i18next.language === 'ar');
AppRegistry.registerComponent(appName, () => App);
