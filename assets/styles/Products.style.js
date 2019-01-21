import { StyleSheet } from 'react-native';

import { coral } from './epamStyles';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	title: {
		fontSize: 50,
		width: '100%',
		textAlign: 'center',
		paddingVertical: 20,
		borderBottomWidth: 1,
	},
	modalContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.6)',
	},
	modalContent: {
		width: '80%',
		backgroundColor: '#FFFFFF',
		padding: 20,
	},
	errorMessage: {
		color: coral,
		fontSize: 30,
	},
});
