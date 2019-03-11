/** @format */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import { Sentry } from 'react-native-sentry';
Sentry.config(
	'https://d1a0ec9c9b6c46e8b9d444602974468d@sentry.io/1396708'
).install();

AppRegistry.registerComponent(appName, () => App);
