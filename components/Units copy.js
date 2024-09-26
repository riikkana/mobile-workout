import React, { useState } from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { RadioButton } from 'react-native-paper';


export default function Units() {
    const [checked, setChecked] = useState('first');

return (
<View style={styles.radioContainer}>
          <Text style={styles.radioHeading}>Units</Text>
          <View style={styles.radioButton}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text>Kilometers</Text>
          </View>
          <View style={styles.radioButton}>
            <RadioButton
              style={styles.radioButton}
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text>Miles</Text>
          </View>
        </View>
)
}