import { createNotesStyles } from '../styles/createNotesStyles'
import { View, TouchableOpacity, Image } from 'react-native'
import add from '../assets/add.png'

const CreateNoteScreen = ({setRes, res, navigation}) => {
    return (
        <View style={createNotesStyles.container}>
            <TouchableOpacity style={createNotesStyles.crossButton} onPress={() => {navigation.navigate('Edit note', {setRes, res})}}>
            <Image
                source={add}
                style={createNotesStyles.cross}
            />
            </TouchableOpacity>
        </View>
    )
}

export { CreateNoteScreen }