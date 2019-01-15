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
		width: '100%',
		alignItems: 'center',
	},
	loginButtonText: {
		fontSize: 20,
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
		justifyContent: 'flex-end',
		marginTop: 30,
	},
	closeButton: {
		width: '20%',
		backgroundColor: limeGreen,
		alignItems: 'center',
	},
	tryAgainButton: {
		width: '20%',
		marginLeft: 15,
		backgroundColor: limeGreen,
		alignItems: 'center',
	},
	wrongCredentials: {
		color: coral,
		fontSize: 30,
	},
});
