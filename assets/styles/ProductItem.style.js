import { StyleSheet } from 'react-native';

import { limeGreen } from './epamStyles';

export default StyleSheet.create({
	borderTop: {
		marginTop: '25%',
		borderTopWidth: 1,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 20,
		paddingTop: 20,
	},
	image: {
		width: 50,
		height: 50,
	},
	title: {
		flex: 1,
		fontSize: 40,
		marginHorizontal: 20,
	},
	descriptionContainer: {
		width: '60%',
		marginTop: 30,
		marginLeft: 50,
	},
	description: {
		fontSize: 18,
	},
	button: {
		marginTop: 30,
		marginLeft: 50,
		borderWidth: 1,
		width: 150,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: limeGreen,
		borderColor: limeGreen,
	},
	buttonText: {
		fontSize: 20,
	},
	borderBottom: {
		marginTop: 30,
		borderBottomWidth: 1,
		marginBottom: '25%',
	},
});
