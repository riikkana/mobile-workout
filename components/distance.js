import React, {useState} from 'react'
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { TextInput } from 'react-native-paper';

export default function Distance({ onDistanceChange }) {
    const [distance, setDistance] = useState('');

    const handleDistanceChange = (text) => {
        setDistance(text); // Päivitetään oma tila
        onDistanceChange(text); // Kutsutaan parentin callbackia ja välitetään syötetty arvo
    };

    return(
        <View>
            <Text>Distance</Text>
            <TextInput
                type="text"
                value={distance} // Liitetään TextInput komponentin omaan tilaan
                onChangeText={handleDistanceChange} // Kutsutaan aina kun teksti muuttuu
                //keyboardType="numeric" // Asetetaan numeerinen näppäimistö
            />
        </View>
    )
}