import React, { useState, useEffect } from 'react';
import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import { RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Units() {
    const [checked, setChecked] = useState('km'); 

    const loadUnit = async () => {
        try {
            const savedUnit = await AsyncStorage.getItem('distanceUnit');
            if (savedUnit !== null) {
                setChecked(savedUnit);
            } else {
                await AsyncStorage.setItem('distanceUnit', 'km');
            }
        } catch (error) {
            console.log("Failed:", error);
        }
    };

    useEffect(() => {
        loadUnit();
    }, []);

    const handleUnitChange = async (value) => {
        try {
            setChecked(value);
            await AsyncStorage.setItem('distanceUnit', value);
        } catch (error) {
            console.log("Failed:", error);
        }
    };

    return (
        <View style={styles.radioContainer}>
            <Text style={styles.radioHeading}>Units</Text>
            
            <View style={styles.radioButton}>
                <RadioButton
                    value="km"
                    status={checked === 'km' ? 'checked' : 'unchecked'}
                    onPress={() => handleUnitChange('km')} 
                />
                <Text>Kilometers</Text>
            </View>

            <View style={styles.radioButton}>
                <RadioButton
                    value="mi"
                    status={checked === 'mi' ? 'checked' : 'unchecked'}
                    onPress={() => handleUnitChange('mi')}
                />
                <Text>Miles</Text>
            </View>
        </View>
    );
}
