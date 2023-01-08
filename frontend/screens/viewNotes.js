import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import circleYellow from '../assets/circle_yellow.png'

import { computeGetNotes } from '../useApi/get'

import { viewNotesStyles } from '../styles/viewNotesStyles'

import { CreateNoteScreen } from './createNotes'
import { NoteCard } from '../utils/components/noteCard'
import { notesToArrayForCards } from '../utils/functions/notesToArrayForCards'

const ViewNoteScreen = ({navigation}) => {
  const scrollViewRef = useRef()
  const [res, setRes] = useState()
  const [update, setUpdate] = useState()
  let titles = []

  useEffect(() => {
    computeGetNotes().then(notes => {
      setRes(notes)
    })
  }, [])

  useEffect(() => {
    setUpdate(1)
  }, [res])

  titles = notesToArrayForCards(res)

  return (
      <SafeAreaView style={viewNotesStyles.container}>
          <Image
          source={circleYellow}
          style={viewNotesStyles.image}
      />
      <ScrollView ref={scrollViewRef}>
          {titles.map((note, index) => {
          return (
              <NoteCard note={note} res={res} setRes={setRes} navigation={navigation} key={index}/>
          )
          })
      }
      </ScrollView>
      <CreateNoteScreen navigation={navigation} res={res} setRes={setRes} />
      </SafeAreaView>
      )
}

export { ViewNoteScreen }
