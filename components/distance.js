import React, {useState} from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { TextInput } from 'react-native-paper';

export default function Distance() {
    return(
        <View>
            <Text>distance</Text>
            <TextInput
            type='text'/>
        </View>
    )
}