import React, { useEffect, useState } from 'react'
import { computeDeleteNote } from '../../useApi/delete'
import cross from '../../assets/cross.png'
import { Text, TouchableOpacity, Image, Alert } from 'react-native'
import { computeGetNotes } from '../../useApi/get'
import { viewNotesStyles } from '../../styles/viewNotesStyles'

const NoteCard = ({ note, setRes, res, navigation}) => {

    const [update, setUpdate] = useState()
    const id = note[0].id
    const content = note[0].content
    const title = note[0].title
    const date = note[0].date

    useEffect(() => {
        computeGetNotes().then(notes => {
            setRes(notes)
        })
    }, [update])

    return (
    <TouchableOpacity style={viewNotesStyles.cardNote} onPress={() => {navigation.navigate('Edit note',
        { title, content, id, setRes, res})}}>
        <Text style={viewNotesStyles.title}>{title}</Text>
        <Text style={viewNotesStyles.dateText}>{date.split('T').join('  ').replace('.000Z', '')}</Text>
        <TouchableOpacity style={viewNotesStyles.crossButton}
            onPress={() =>
                Alert.alert(
                'Delete a note',
                'Are you sur you want to delete this note ?',
                [
            { text: 'OK', onPress: () => {computeDeleteNote(id); setUpdate(1) } },
            { text: 'Cancel' }
                ]
        )}>
        <Image
            source={cross}
            style={viewNotesStyles.cross}
        />
        </TouchableOpacity>
    </TouchableOpacity>
    )
}

export { NoteCard }