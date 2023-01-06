function getNotes () {
    const options = {
      method: 'GET',
      credentials: 'include'
    }
    return fetch('http://10.0.2.2:8080/', options)
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