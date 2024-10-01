import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, Alert, TouchableOpacity } from "react-native";
import { styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useCallback } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ThirdScreen() {
  const [workouts, setWorkouts] = useState([]);
  const [distances, setDistances] = useState({}); // Tallenna kilometrimäärät lajeittain

  const tabs = [
    { name: 'Skiing', icon: 'ski' },
    { name: 'Biking', icon: 'bike-fast' },
    { name: 'Running', icon: 'run-fast' }
  ];


  const loadWorkouts = async () => {
    try {
      const savedWorkouts = await AsyncStorage.getItem('workouts');
      if (savedWorkouts !== null) {
        const parsedWorkouts = JSON.parse(savedWorkouts);
       /*  parsedWorkouts.forEach(workout => {
          if (!workout.sport) {
            console.warn("Treeniobjekti puuttuu 'sport'-ominaisuus:", workout);
          }
        }); */
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
      if (distancesMap[workout.sport]) {
        distancesMap[workout.sport] += workout.distance; // Lisää etäisyys
      } else {
        distancesMap[workout.sport] = workout.distance; // Luo uusi laji
      }
    });

    setDistances(distancesMap); // Aseta etäisyydet tilaan
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
      //Alert.alert('Workout deleted');
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
              <Text style={styles.distanceValue}>{distance} km</Text>
            </View>
          );
        })}
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <Text style={{fontFamily: 'Ubuntu', fontSize: 26, margin: 15}}>Workout History</Text>
      {renderDistanceBoxes()}
      <FlatList
        data={workouts.slice().reverse()}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

// react native paper Dialog "alertille"