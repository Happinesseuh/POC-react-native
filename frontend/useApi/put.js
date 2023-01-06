import { PORT, ENDPOINT } from 'react-native-dotenv'

function EditNote (note, id) {
    const options = {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(note)
      }
    return fetch(`http://${ENDPOINT}:${PORT}/${id}`, options)
}
  
  function computeEditNote (note, id) {
    return EditNote(note, id).then((res) => {
      if (!res.ok) { throw Error('error : ', res.error) }
      return res.json()
    }).then((userNotes) => {
      return userNotes
    })
  }

export {computeEditNote}