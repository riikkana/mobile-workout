import React, { useState } from 'react'
import { View, Text, Alert } from "react-native";
import { styles } from "../styles/Styles";
import { TextInput } from 'react-native-paper';

export default function Distance({ onDistanceChange }) {
    const [distance, setDistance] = useState('');

    const handleDistanceChange = (input) => {
        if (/[^0-9]/.test(input)) {
            Alert.alert("Hups!", "Vain positiiviset numerot ovat sallittuja.");
            return;
        }
        if (input.startsWith('-')) {
            Alert.alert("Hups!", "Vain positiiviset numerot ovat sallittuja.");
            return; // Lopeta funktio, jotta negatiivista arvoa ei aseteta
        }
        setDistance(input); 
        onDistanceChange(input);
    };

    return (
        <View>
            <Text>Distance</Text>
            <TextInput
                type="text"
                keyboardType="numeric"
                value={distance} // Liitetään TextInput komponentin omaan tilaan
                onChangeText={handleDistanceChange} // Kutsutaan aina kun teksti muuttuu
            />
        </View>
    )
}