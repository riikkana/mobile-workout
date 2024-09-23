import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import { styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function ThirdScreen() {
  const [workouts, setWorkouts] = useState([]);

  const loadWorkouts = async () => {
    try {
      const savedWorkouts = await AsyncStorage.getItem('workouts');
      if (savedWorkouts !== null) {
        setWorkouts(JSON.parse(savedWorkouts));
      }
    } catch (error) {
      Alert.alert('Failed to load workouts');
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      loadWorkouts(); // Päivittää tiedot, kun käyttäjä siirtyy välilehdelle
    }, [])
  );


  const renderItem = ({ item }) => (
    <View style={styles.workItem}>
      <Text>Date: {item.date}</Text>
      <Text>Sport: {item.sport}</Text>
      <Text>Distance: {item.distance} km</Text>
      <Text>Duration: {item.duration} min</Text>
    </View>
  );




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Workout History</Text>
      <FlatList
        data={workouts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

// react native paper Dialog "alertille"