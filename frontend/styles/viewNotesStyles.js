import { StyleSheet } from 'react-native'

const viewNotesStyles = StyleSheet.create({
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
  crossButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: '#584CF4',
    height: 30,
    width: 30,
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
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    top: '30%',
    fontWeight: 'bold',
    fontSize: 20
  },
  cross: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain'
  },
  dateText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    top: '40%',
    left: '-15%',
    fontSize: 15
  },
  image: {
    position: 'absolute',
    top: '85%',
    left: '-90%',
    right: 0,
    bottom: '10%'
  }
})

export { viewNotesStyles }