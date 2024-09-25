import React, {useState} from 'react'
import { View, Text, Alert } from "react-native";
import { TextInput } from 'react-native-paper';

export default function Duration({ onDurationChange }) {
    const [duration, setDuration] = useState('');

    const handleDurationChange = (input) => {
        if (/[^0-9]/.test(input)) {
            Alert.alert("Hups!", "Vain positiiviset numerot ovat sallittuja.");
            return;
        }
        if (input.startsWith('-')) {
            Alert.alert("Hups!", "Vain positiiviset numerot ovat sallittuja.");
            return;
        }
        setDuration(input); 
        onDurationChange(input); 
    };

    return(
        <View  style= {{paddingTop: 10 }}>
            <Text>Duration</Text>
            <TextInput
                type="text"
                value={duration} 
                onChangeText={handleDurationChange} 
                keyboardType="numeric" 
            />
        </View>
    )
}