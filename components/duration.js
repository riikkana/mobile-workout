import React, {useState, useEffect} from 'react'
import { View, Text, Alert } from "react-native";
import { TextInput } from 'react-native-paper';

export default function Duration({ onDurationChange, selectedDuration }) {
    const [duration, setDuration] = useState('');

    useEffect(() => {
        setDuration(selectedDuration);
    }, [selectedDuration]);

    const handleDurationChange = (input) => {
        if (/[^0-9]/.test(input)) {
            Alert.alert("Oops!", "Only positive numbers are allowed.");
            return;
        }
        if (input.startsWith('-')) {
            Alert.alert("Oops!", "Only positive numbers are allowed.");
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