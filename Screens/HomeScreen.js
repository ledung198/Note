import React from 'react';
import { Text, View } from 'react-native';
import { useState } from 'react/cjs/react.development';

const HomeScreen = () => {
    const  [listNote, setListNote] = useState([]);

    return(
        <View>
                <Text>Home</Text>
        </View>
    )
}
export default HomeScreen;