import React, { useEffect, useRef, useState } from 'react'

import {  Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { EditNotesStyles } from '../styles/editNotesStyles'

import { computeCreateNote } from '../useApi/post'
import { computeGetNotes } from '../useApi/get'
import { computeEditNote } from '../useApi/put'

import { getIndexNoteFromId } from '../utils/functions/getIndexNoteFromId'

const EditNoteScreen = ({ route }) => {
  const scrollViewRef = useRef()
  const [update, setUpdate] = useState()
  const index = getIndexNoteFromId(route.params.res, route.params.id)

  useEffect(() => {
    computeGetNotes().then(notes => {
      route.params.setRes(notes)
    })
  }, [update])

  const [note, setNote] = useState({
    title: index === -1 ? "title" : route.params.res[index].title,
    content: index === -1 ? "content" : route.params.res[index].content,
  })

  return (
    <SafeAreaView style={EditNotesStyles.container}>
          <ScrollView ref={scrollViewRef}>
            <TextInput
              value={note.title}
              onChangeText={(title) => setNote({ ...note, title })}
              placeholder={route.params.title}
              style={EditNotesStyles.input}
            />
            <TextInput
              value={note.content}
              onChangeText={(content) => setNote({ ...note, content })}
              placeholder={route.params.content}
              style={EditNotesStyles.input}
            />
      </ScrollView>
      <TouchableOpacity style={EditNotesStyles.button} onPress={
        route.params.id ? () => {computeEditNote(note, route.params.id); setUpdate(1)}
                        : () => {computeCreateNote(note); setUpdate(1)}}>
        <Text style={EditNotesStyles.text}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export {EditNoteScreen}