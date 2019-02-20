import React, { Component } from 'react';
import { UIManager, Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PushNotification from 'react-native-push-notification';
import { navigationService } from './services/navigationService';

import Router from './Router';
import mainReducer from './reducers/mainReducer';

UIManager.setLayoutAnimationEnabledExperimental &&
	UIManager.setLayoutAnimationEnabledExperimental(true);

const store = createStore(mainReducer);

PushNotification.configure({
	onNotification: function(notification) {
		navigationService.navigate('Cart');

		if (Platform.OS === 'ios') {
			notification.finish(PushNotificationIOS.FetchResult.NoData);
		}
	},
});

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router
					ref={navigatorRef => {
						navigationService.setTopLevelNavigator(navigatorRef);
					}}
				/>
			</Provider>
		);
	}
}
