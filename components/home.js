import { View, Text, StyleSheet, Alert } from "react-native";
import { styles } from "../styles/Styles";
import React, { useState } from 'react';
import CalendarComponent from "./CalendarComponent";
import { Button } from "react-native-paper";
import Distance from "./distance";
import Sport from "./sport";
import Duration from "./duration";
import AsyncStorage from '@react-native-async-storage/async-storage';


//const currentStyle = on ? darkStyle : styles

export default function HomeScreen() {
    const [date, setDate] = useState(''); 
    const [sport, setSport] = useState('');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');

    const saveWorkout = async () => {
        console.log('Saving workout:', { date, sport, distance, duration });

        if (!date || !sport || !distance || !duration) {
            Alert.alert('Please fill in all fields');
            return;
        }

        try {
            const workout = { date, sport, distance, duration };
            const existingWorkouts = await AsyncStorage.getItem('workouts');
            let newWorkouts = existingWorkouts ? JSON.parse(existingWorkouts) : [];
            newWorkouts.push(workout);
            await AsyncStorage.setItem('workouts', JSON.stringify(newWorkouts));
            Alert.alert('Workout added!'); // tämä jotenkin muuten !
        } catch (error) {
            Alert.alert('Failed to save workout, try again');
        }
    };
    
    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Add new workout</Text>
            </View>
            <View style={{padding: 20}}>
            <CalendarComponent onDateChange={setDate} />
            <Sport onSportChange={setSport} />
            <Distance onDistanceChange={setDistance} />
            <Duration onDurationChange={setDuration} />
            </View>
            <View style={{ paddingTop: 20 }}>
                <Button 
                    style={styles.button} 
                    mode="contained" 
                    onPress={saveWorkout}>Add workout</Button>
            </View>
        </View>
    );
};
