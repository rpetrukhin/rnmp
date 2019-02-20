import { NavigationActions } from 'react-navigation';

export class NavigationService {
	navigator;

	setTopLevelNavigator(navigatorRef) {
		this.navigator = navigatorRef;
	}

	navigate(routeName, params) {
		this.navigator.dispatch(
			NavigationActions.navigate({
				routeName,
				params,
			})
		);
	}
}

export const navigationService = new NavigationService();
