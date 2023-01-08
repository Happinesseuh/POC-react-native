function getIndexNoteFromId (notes, id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            return i
        }
    }
    return -1;
}

export { getIndexNoteFromId }