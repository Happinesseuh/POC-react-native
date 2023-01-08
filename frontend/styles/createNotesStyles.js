import { StyleSheet } from 'react-native'

const createNotesStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '95%',
        right: 0,
        left: '-40%',
        bottom: 0
    },
    cross: {
        width: '60%',
        height: '60%',
        resizeMode: 'contain'
    },
    crossButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        backgroundColor: '#584CF4',
        height: 80,
        width: 80,
        bottom: 20,
        left: 320,
        shadowColor: '#000',
        shadowOpacity: 0.58,
        shadowRadius: 2.62,
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
})

export {createNotesStyles}