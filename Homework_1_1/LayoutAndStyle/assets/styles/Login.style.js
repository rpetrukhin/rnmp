import { StyleSheet } from 'react-native';

import { limeGreen, graphite } from './epamStyles';

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
    loginButton: {
        width: '20%',
        marginTop: 30,
        backgroundColor: limeGreen,
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: 20,
    }
})