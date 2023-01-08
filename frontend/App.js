import { ViewNoteScreen } from './screens/viewNotes';
import { EditNoteScreen } from './screens/editNotes';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const NotesNavigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Notes" component={ViewNoteScreen} />
      <Stack.Screen name="Edit note" component={EditNoteScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export {NotesNavigator as default}
