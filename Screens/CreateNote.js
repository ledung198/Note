import React from "react";
import {
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react/cjs/react.development";

const CreateNote = () => {
  const [create, setCreate] = useState(0);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const noteData = {
    id: create,
    title: title,
    content: content,
  };
  console.log(noteData);
  const Height = Dimensions.get("window").height;
  return (
    <View>
      <SafeAreaView>
        <Text>Create Note</Text>
        <Button title="click" onPress={() => setCreate(create + 1)} />
        <Text>Note title: </Text>
        <TextInput multiline style={styles.textInput} onChangeText={(title) => setTitle(title)}/>
        <Text>Note content: </Text>
        <TextInput multiline style={[styles.textInput, { height: Height }]} onChangeText={(content) => setContent(content)}/>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: "red",
        padding: 5,
    }
}) 

export default CreateNote;
