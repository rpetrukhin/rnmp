import {
	createSwitchNavigator,
	createStackNavigator,
	createAppContainer,
} from 'react-navigation';

import Login from './screens/Login';
import Products from './screens/Products';
import ProductItem from './screens/ProductItem';

const stackNav = createStackNavigator(
	{
		Products,
		ProductItem,
	},
	{
		initialRouteName: 'Products',
		defaultNavigationOptions: {
			header: null,
		},
	}
);

const switchNav = createSwitchNavigator(
	{
		Login: Login,
		Main: stackNav,
	},
	{
		initialRouteName: 'Login',
	}
);

export default createAppContainer(switchNav);
