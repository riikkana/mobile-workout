import { View, Text, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { styles } from "../styles/Styles";
import React, { useState, useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const tabs = [
  { name: 'Skiing', icon: 'ski' }, 
  { name: 'Biking', icon: 'bike-fast' }, 
  { name: 'Running', icon: 'run-fast' }
];

export default function Sport({ onSportChange, selectedSport }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const index = tabs.findIndex(tab => tab.name === selectedSport);
    setValue(index !== -1 ? index : 0);
}, [selectedSport]);

  const handleSportChange = (index) => {
    setValue(index); 
    onSportChange(tabs[index].name); 
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={styles.container2}>
        {tabs.map((item, index) => {
          const isActive = index === value;
          return (
            <View key={item.name} style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => handleSportChange(index)}>
                <View
                  style={[
                    styles.item2,
                    isActive && { backgroundColor: '#ffe0fb' },
                  ]}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={20}
                    color={isActive ? '#98246d' : 'black'}
                    style={{ marginRight: 8 }}
                  />
                  <Text style={[styles.text2, isActive && { color: '#' }]}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
