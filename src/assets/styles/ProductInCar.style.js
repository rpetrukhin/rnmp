import { StyleSheet } from 'react-native';

import { limeGreen } from './epamStyles';

export default StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 20,
		borderBottomWidth: 1,
	},
	image: {
		width: 30,
		height: 30,
	},
	name: {
		flex: 1,
		marginLeft: 20,
		fontSize: 30,
	},
	button: {
		backgroundColor: limeGreen,
		height: 30,
		width: 30,
		borderRadius: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		fontSize: 20,
	},
});
