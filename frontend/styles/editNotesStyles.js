import { StyleSheet } from 'react-native'

const EditNotesStyles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
    },
    cardNote: {
    paddingVertical: 10,
    borderRadius: 10,
    height: 100,
    width: 370,
    marginVertical: 10,
    backgroundColor: 'white',
    borderColor: '#F2F0F0',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 0
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    borderWidth: 1
    },
    input: {
      textAlign: 'center',
      textAlignHorizontal: 'center',
      textAlignVertical: 'center'
    },
    button: {
      width: '80%',
      paddingVertical: 10,
      height: '8%',
      bottom: '2%',
      marginLeft: '50%',
      marginRight: '50%',
      borderRadius: 60,
      backgroundColor: '#584CF4',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'center'
    },
    text: {
      flex: 1,
      fontSize: 18,
      left: '0%',
      color: 'white',
      fontWeight: '600',
      textAlignVertical: 'center',
      textAlign: 'center'
    }
  })

export {EditNotesStyles}