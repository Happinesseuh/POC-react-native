import React, { useEffect, useRef, useState } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, Alert, StyleSheet, TextInput } from 'react-native'
import { SafeAreaView, withSafeAreaInsets } from 'react-native-safe-area-context'

import cross from '../assets/cross.png'
import circleYellow from '../assets/circle_yellow.png'
import { computeCreateNote } from '../useApi/post'
import { computeEditNote } from '../useApi/put'
import { EditNoteStyles } from '../styles/editNoteStyles'

const EditNoteScreen = ({ route }) => {
  const scrollViewRef = useRef()
  const [note, setNote] = useState({
    title: route.params.title,
    content: route.params.content,
  })

  return (
    <SafeAreaView style={EditNoteStyles.container}>
          <ScrollView ref={scrollViewRef}>
            <TextInput
              value={note.title}
              onChangeText={(title) => setNote({ ...note, title })}
              placeholder={route.params.title ? route.params.title : 'title'}
              style={EditNoteStyles.input}
            />
            <TextInput
              value={note.content}
              onChangeText={(content) => setNote({ ...note, content })}
              placeholder={route.params.content ? route.params.content : 'content'}
              style={EditNoteStyles.input}
            />
      </ScrollView>
      <TouchableOpacity style={EditNoteStyles.button} onPress={route.params.id ? () => computeEditNote(note, route.params.id): () => computeCreateNote(note)}>
        <Text style={EditNoteStyles.text}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export {EditNoteScreen}