/**
 * @format
 */

import i18next from 'i18next';
import {AppRegistry, I18nManager} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
I18nManager.forceRTL(i18next.language === 'ar');
AppRegistry.registerComponent(appName, () => App);
