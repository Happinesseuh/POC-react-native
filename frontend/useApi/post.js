import { PORT, ENDPOINT } from 'react-native-dotenv'

function createNote (note) {
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(note)
      }
      return fetch(`http://${ENDPOINT}:${PORT}/`, options)
    }
  
  function computeCreateNote (note) {
    return createNote(note).then((res) => {
      if (!res.ok) { throw Error('Error while creating note ') }
      return res.json()
    }).then((userNotes) => {
      return userNotes
    })
  }

export {computeCreateNote}