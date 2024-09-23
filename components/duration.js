import React, {useState} from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { TextInput } from 'react-native-paper';

export default function Duration({ onDurationChange }) {
    const [duration, setDuration] = useState('');

    const handleDurationChange = (text) => {
        setDuration(text); // Päivitetään oma tila
        onDurationChange(text); // Kutsutaan parentin callbackia ja välitetään syötetty arvo
    };

    return(
        <View  style= {{paddingTop: 10 }}>
            <Text>Duration</Text>
            <TextInput
                type="text"
                value={duration} // Liitetään TextInput komponentin omaan tilaan
                onChangeText={handleDurationChange} // Kutsutaan aina kun teksti muuttuu
                //keyboardType="numeric" // Asetetaan numeerinen näppäimistö
            />
        </View>
    )
}