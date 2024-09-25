import React, { useState, useEffect } from 'react'
import { View, Text, Alert } from "react-native";
import { styles } from "../styles/Styles";
import { TextInput } from 'react-native-paper';

export default function Distance({ onDistanceChange, selectedDistance }) {
    const [distance, setDistance] = useState('');

    useEffect(() => {
        setDistance(selectedDistance);
    }, [selectedDistance]);

    const handleDistanceChange = (input) => {
        if (/[^0-9]/.test(input)) {
            Alert.alert("Oops!", "Only positive numbers are allowed.");
            return;
        }
        if (input.startsWith('-')) {
            Alert.alert("Oops!", "Only positive numbers are allowed.");
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
                value={distance} 
                onChangeText={handleDistanceChange} 
            />
        </View>
    )
}