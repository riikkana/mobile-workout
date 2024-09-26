import React, { useState } from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { MD3DarkTheme, PaperProvider, RadioButton } from 'react-native-paper';
import Units from './Units';
import Theme from './Theme';

const myTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#98246d'
  }
}

export default function SettingsScreen() {

  return (
    <PaperProvider theme={myTheme}>
      <View style={styles.container}>
        <Text style={{ fontFamily: 'Ubuntu', fontSize: 26, margin: 15 }}>Settings</Text>
        <Units />
        <Theme />
      </View>
    </PaperProvider>
  );
}