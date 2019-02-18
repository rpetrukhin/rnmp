import { StyleSheet } from 'react-native';

import { limeGreen, coral } from './epamStyles';

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logo: {
		width: 50,
		height: 50,
	},
	title: {
		fontSize: 40,
		marginVertical: 40,
	},
	input: {
		width: '80%',
		borderWidth: 1,
		marginTop: 20,
		textAlign: 'center',
		fontFamily: 'vincHand',
		fontSize: 20,
	},
	loginButtonContainer: {
		marginTop: 30,
		backgroundColor: limeGreen,
	},
	loginButton: {
		height: 50,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	loginButtonText: {
		fontSize: 25,
	},
	loginButtonDotsContainer: {
		position: 'absolute',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	loginButtonDot: {
		width: 3,
		height: 3,
		borderRadius: 3,
		backgroundColor: 'white',
		marginRight: 4,
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
	modalButtonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 30,
	},
	modalButton: {
		width: '45%',
		backgroundColor: limeGreen,
		alignItems: 'center',
	},
	modalButtonText: {
		fontSize: 20,
	},
	wrongCredentials: {
		color: coral,
		fontSize: 30,
	},
});
