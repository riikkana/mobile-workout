import React, { useState } from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { RadioButton } from 'react-native-paper';


export default function Theme() {
    const [checked, setChecked] = useState('first');

return (
<View style={styles.radioContainer}>
          <Text style={styles.radioHeading}>Theme (not in use)</Text>
          <View style={styles.radioButton}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text>Light</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton
              style={styles.radioButton}
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text>Dark</Text>
          </View>
        </View>
)
}