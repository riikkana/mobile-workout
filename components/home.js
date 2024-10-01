import { View, Text, StyleSheet, Alert } from "react-native";
import { styles } from "../styles/Styles";
import React, { useState } from 'react';
import CalendarComponent from "./CalendarComponent";
import { Button } from "react-native-paper";
import Distance from "./distance";
import Sport from "./sport";
import Duration from "./duration";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';

const tabs = [
    { name: 'Skiing', icon: 'ski' },
    { name: 'Biking', icon: 'bike-fast' },
    { name: 'Running', icon: 'run-fast' }
];

export default function HomeScreen() {
    const [date, setDate] = useState('');
    const [sport, setSport] = useState('');
    const [distance, setDistance] = useState('');
    const [duration, setDuration] = useState('');
    const [visible, setVisible] = React.useState(false);
    const [dialogMessage, setDialogMessage] = useState('');

    const showDialog = (message) => {
        setDialogMessage(message);
        setVisible(true);
    };

    const hideDialog = () => setVisible(false);

    const [loaded] = useFonts({
        Ubuntu: require('../assets/fonts/Ubuntu-Medium.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const saveWorkout = async () => {
        if (!date || !sport || !distance || !duration) {
            Alert.alert('Fill all fields, please.');
            return;
        }
        try {
            const workout = { id: Date.now(), date, sport, distance, duration };
            const existingWorkouts = await AsyncStorage.getItem('workouts');
            let newWorkouts = existingWorkouts ? JSON.parse(existingWorkouts) : [];
            newWorkouts.push(workout);
            await AsyncStorage.setItem('workouts', JSON.stringify(newWorkouts));
            Alert.alert('Workout added!'); // tämä jotenkin muuten !   
            showDialog('Workout added!');
            setDate('');
            setSport('');
            setDistance('');
            setDuration('');
        } catch (error) {
            Alert.alert('Failed to save workout, try again');
        }
    };

    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Add new workout</Text>
            </View>
            <View style={{ padding: 20 }}>
                <CalendarComponent date={date} onDateChange={setDate} />
                <Sport onSportChange={setSport} />
                <Distance onDistanceChange={setDistance} selectedDistance={distance} />
                <Duration onDurationChange={setDuration} selectedDuration={duration} />
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
