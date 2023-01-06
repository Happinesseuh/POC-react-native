import React, { useEffect, useRef, useState, useCallback, useNavigation } from 'react'
import { View, Text, RefreshControl, TouchableOpacity, ScrollView, Image, Alert, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import cross from '../assets/cross.png'
import circleYellow from '../assets/circle_yellow.png'
import add from '../assets/add.png'
import { computeGetNotes } from '../useApi/get'
import { computeDeleteNote } from '../useApi/delete'
import { ViewNoteStyles } from '../styles/homeStyles'

const CreateNote = ({navigation}) => {
    return (
        <View style={{position: 'absolute', top: '95%', right: 0, left: '-40%', bottom: 0}}>
        <TouchableOpacity style={ViewNoteStyles.crossButton2} onPress={() => {navigation.navigate('Edit note', {})}}>
          <Image
          source={add}
          style={ViewNoteStyles.cross2}
          />
        </TouchableOpacity>
        </View>
      )
}

const NoteCard = ({ note, navigation }) => {
  const [id, setId] = useState(note[0].id)
  const [content, setContent] = useState(note[0].content)
  const [title, setTitle] = useState(note[0].title)
  return (
  <TouchableOpacity style={ViewNoteStyles.cardNote} onPress={() => {navigation.navigate('Edit note', { title, content, id })}}>
  <Text style={ViewNoteStyles.title}>{note[0].title}</Text>
  <Text style={ViewNoteStyles.modified_date}>{note[0].date}</Text>
  <TouchableOpacity style={ViewNoteStyles.crossButton}
    onPress={() =>
        Alert.alert(
        'Delete a note',
        'Are you sur you want to delete this note ?',
        [
    { text: 'OK', onPress: () => computeDeleteNote(note[0].id) },
    { text: 'Cancel' }
        ]
  )}>
    <Image
      source={cross}
      style={ViewNoteStyles.cross}
      />
  </TouchableOpacity>
  </TouchableOpacity>
  )
}

const ViewNoteScreen = ({navigation}) => {
  const scrollViewRef = useRef()
  const [res, setRes] = useState()
  const titles = []

  useEffect(() => {
    computeGetNotes().then(notes => {
      setRes(notes)
    })
  }, [])

  if (res) {
      for (let i = 0; i < res.length; i++) {
      titles.push([{ title: res[i].title, id: res[i].id, content: res[i].content, date: res[i].modified_date}, i])
      }
      titles.sort(function(a,b){
        return new Date(b.date) - new Date(a.date);
      });
      titles.reverse()
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  
  const [refreshing, setRefreshing] = useState(false);
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);

  return (
      <SafeAreaView style={ViewNoteStyles.container}>
          <Image
          source={circleYellow}
          style={{ position: 'absolute', top: '85%', left: '-90%', right: 0, bottom: '10%' }}
      />
      <ScrollView ref={scrollViewRef} contentContainerStyle={{}}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
          {titles.map((note, index) => {
          return (
              <NoteCard note={note} navigation={navigation} key={index}/>
          )
          })
      }
      </ScrollView>
      <CreateNote navigation={navigation}/>
      </SafeAreaView>
      )
}

export { ViewNoteScreen }
