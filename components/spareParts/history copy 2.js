import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useCallback } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ThirdScreen() {
  const [workouts, setWorkouts] = useState([]);
  const [distances, setDistances] = useState({});
  const [unit, setUnit] = useState('km');

  const tabs = [
    { name: 'Skiing', icon: 'ski' },
    { name: 'Biking', icon: 'bike-fast' },
    { name: 'Running', icon: 'run-fast' }
  ];

  const loadUnit = async () => {
    try {
      const savedUnit = await AsyncStorage.getItem('distanceUnit');
      if (savedUnit !== null) {
        setUnit(savedUnit);
      }
    } catch (error) {
      Alert.alert('Failed to load unit setting');
    }
  };
    
  useFocusEffect(
    React.useCallback(() => {
      const loadData = async () => {
        await loadUnit(); 
        await loadWorkouts(); 
      };
      loadData(); // Kutsutaan kun käyttäjä siirtyy välilehdelle
    }, [])
  );

  useEffect(() => {
    calculateDistances(workouts); // etäisyydet, kun yksikkö tai treenit vaihtuvat
  }, [unit, workouts]);

  const convertDistance = (distance) => {

    if (distance === undefined || distance === null) {
        console.log('Distance is undefined or null');
        return '0.00'; 
    }
    const dist = parseFloat(distance);
    
    if (isNaN(dist)) {
        console.log('Distance is not a valid number:', distance);
        return '0.00';
    }

    if (unit === 'mi') {
        return (dist * 0.621371).toFixed(2); 
    }

    return dist.toFixed(2);
};

  const loadWorkouts = async () => {
    try {
      const savedWorkouts = await AsyncStorage.getItem('workouts');
      if (savedWorkouts !== null) {
        const parsedWorkouts = JSON.parse(savedWorkouts);
       parsedWorkouts.forEach(workout => {
          if (!workout.sport) {
            console.warn("Treeniobjekti puuttuu 'sport'-ominaisuus:", workout);
          }
        });
        setWorkouts(parsedWorkouts);
        calculateDistances(parsedWorkouts);
      }
    } catch (error) {
      Alert.alert('Failed to load workouts');
    }
  };

  const calculateDistances = (workouts) => {
    const distancesMap = {};
  
    workouts.forEach(workout => {
      const distance = parseFloat(convertDistance(workout.distance));
      if (distancesMap[workout.sport]) {
        distancesMap[workout.sport] += distance;
      } else {
        distancesMap[workout.sport] = distance;
      }
    });
  
    setDistances(distancesMap);
  };

  const deleteWorkout = async (id) => {
    try {
      const updatedWorkouts = workouts.filter((workout) => workout.id !== id);
      setWorkouts(updatedWorkouts);
      await AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts));
      calculateDistances(updatedWorkouts);
      Alert.alert('Workout deleted');
    } catch (error) {
      Alert.alert('Failed to delete workout');
    }
  };

const renderDistanceBoxes = () => {
  return (
    <View style={styles.distanceContainer}>
      {tabs.map((tab, index) => {
        const distance = distances[tab.name] || 0;
        return (
          <View key={index} style={styles.distanceBox}>
            <MaterialCommunityIcons
              name={tab.icon}
              size={20}
              color={'white'}
              style={{ marginRight: 8 }}
            />
            <Text style={styles.distanceValue}>
              {distance} {unit === 'mi' ? 'mi' : 'km'}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const renderItem = ({ item }) => (
  <View style={styles.workItem}>
    <Text>Date: {item.date}</Text>
    <Text>Sport: {item.sport}</Text>
    <Text>Distance: {convertDistance(item.distance)} {unit === 'mi' ? 'mi' : 'km'}</Text>
    <Text>Duration: {item.duration} min</Text>
    <TouchableOpacity onPress={() => deleteWorkout(item.id)}>
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
      <Text style={{fontFamily: 'Ubuntu', fontSize: 26, margin: 15}}>Workout History</Text>
      {renderDistanceBoxes()}
      <FlatList
        data={workouts.slice().reverse()}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.date}-${index}`}
      />
    </View>
  );
}
