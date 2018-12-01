import { StyleSheet } from 'react-native';

import { limeGreen } from './epamStyles';

export default StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: '25%',
        borderTopWidth: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 40,
        marginLeft: 20,
    },
    descriptionContainer: {
        width: '60%',
        marginTop: 30,
        marginLeft: 50,
    },
    description: {
        fontSize: 16,
    },
    button: {
        marginTop: 30,
        marginLeft: 50,
        borderWidth: 1,
        width: 100,
        alignItems: 'center',
        backgroundColor: limeGreen,
        borderColor: limeGreen,
    },
    buttonText: {
        fontSize: 20,
    },
    borderBottom: {
        marginTop: 30,
        borderBottomWidth: 1,
    }
});