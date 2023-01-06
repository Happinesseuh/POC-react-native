function deleteNote (id) {
    const options = {
      method: 'DELETE',
      credentials: 'include'
    }
    return fetch(`http://10.0.2.2:8080/${id}`, options)
  }

function computeDeleteNote (id) {
    return deleteNote(id).then((res) => {
      if (res.ok) {
        return res.status
      }
      throw Error('Error while deleting note')
    }).catch((err) => { throw err })
  }

export {computeDeleteNote}
