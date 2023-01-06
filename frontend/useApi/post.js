function createNote (note) {
    const options = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
       },
        body: JSON.stringify(note)
      }
      console.log(`http://10.0.2.2:8080/`, options)
      return fetch('http://10.0.2.2:8080/', options)
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