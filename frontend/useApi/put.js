function EditNote (note, id) {
    const options = {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
       },
        body: JSON.stringify(note)
      }
    console.log(`http://10.0.2.2:8080/${id}`, options)
    return fetch(`http://10.0.2.2:8080/${id}`, options)
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