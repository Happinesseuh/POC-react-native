import { PORT, ENDPOINT } from 'react-native-dotenv'

function getNotes () {
    const options = {
      method: 'GET',
      credentials: 'include'
    }
    return fetch(`http://${ENDPOINT}:${PORT}/`, options)
  }
  
  function computeGetNotes () {
    return getNotes().then((res) => {
      if (!res.ok) { throw Error('Error while get notes ') }
      return res.json()
    }).then((userNotes) => {
      return userNotes
    })
  }

export {computeGetNotes}