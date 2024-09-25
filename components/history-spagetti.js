import React, { useState } from 'react';
import { View, Text, FlatList, Alert } from "react-native";
import { styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Dialog, Portal, Button, Provider } from 'react-native-paper';
import { useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import Animated from 'react-native-reanimated';  // Huomaa tämä Animated on 'react-native-reanimated'

export default function ThirdScreen() {
  const [workouts, setWorkouts] = useState([]);
  const [visible, setVisible] = useState(false); 
  const [selectedIndex, setSelectedIndex] = useState(null);

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

  const deleteWorkout = () => {
    const updatedWorkouts = [...workouts];
    updatedWorkouts.splice(selectedIndex, 1);
    setWorkouts(updatedWorkouts);
    AsyncStorage.setItem('workouts', JSON.stringify(updatedWorkouts)); // Päivitä AsyncStorage
    setVisible(false); // Piilota dialog
  };

  useFocusEffect(
    React.useCallback(() => {
      loadWorkouts(); // Päivittää tiedot, kun käyttäjä siirtyy välilehdelle
    }, [])
  );

  const showDialog = (index) => {
    setSelectedIndex(index);
    setVisible(true); // Näytä dialog
  };

  const hideDialog = () => setVisible(false);

  const renderItem = ({ item, index }) => {
    const translateX = useSharedValue(0);

    // GestureHandlerin määrittely
    const gestureHandler = useAnimatedGestureHandler({
      onActive: (event) => {
        translateX.value = event.translationX;
      },
      onEnd: (event) => {
        if (event.translationX < -150) {
          // Jos swaippaus on tarpeeksi voimakas
          runOnJS(showDialog)(index); // Kutsutaan showDialog animaation ulkopuolella
        } else {
          // Palautetaan alkuasentoon
          translateX.value = withSpring(0);
        }
      },
    });

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ translateX: translateX.value }],
    }));

    return (
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.workItem, animatedStyle]}>
          <Text>Date: {item.date}</Text>
          <Text>Sport: {item.sport}</Text>
          <Text>Distance: {item.distance} km</Text>
          <Text>Duration: {item.duration} min</Text>
        </Animated.View>
      </PanGestureHandler>
    );
  };

  return (
    <Provider>
      <GestureHandlerRootView style={styles.container}>
        <Text style={styles.heading}>Workout History</Text>
        <FlatList
          data={workouts}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Delete Workout</Dialog.Title>
            <Dialog.Content>
              <Text>Are you sure you want to delete this workout?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Cancel</Button>
              <Button onPress={deleteWorkout}>Delete</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </GestureHandlerRootView>
    </Provider>
  );
}
