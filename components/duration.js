import React, {useState} from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { TextInput } from 'react-native-paper';

export default function Duration() {
    return(
        <View>
            <Text>duration</Text>
            <TextInput/>
        </View>
    )
}