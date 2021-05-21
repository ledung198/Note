import React from "react";
import { View } from "react-native";
import CreateNote from "./Screens/CreateNote";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import NoteDetail from "./Screens/NoteDetail";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home Screen" component={HomeScreen} />
        <Stack.Screen name="Create Note" component={CreateNote} />
        <Stack.Screen name="Detail Note" component={NoteDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
