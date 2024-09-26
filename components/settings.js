import React, {useState} from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text style={{fontFamily: 'Ubuntu', fontSize: 26, margin: 15}}>Settings!</Text>
      </View>
    );
  }