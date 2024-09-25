import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


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

  const deleteWorkout = async (id) => {
    try {
      const updatedWorkouts = workouts.filter((workout, index) => index !== id);
      setWorkouts(updatedWorkouts);
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
      Alert.alert('Workout deleted');
    } catch (error) {
      Alert.alert('Failed to delete workout');
    }
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.workItem}>
      <Text>Date: {item.date}</Text>
      <Text>Sport: {item.sport}</Text>
      <Text>Distance: {item.distance} km</Text>
      <Text>Duration: {item.duration} min</Text>
      <TouchableOpacity onPress={() => deleteWorkout(index)}>
      <MaterialCommunityIcons
                    name='delete'
                    size={20}
                    color='black'
                    style={{ marginLeft: 320 }}
                  />
      </TouchableOpacity>
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