import { View, Text, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { styles } from "../styles/Styles";
import React, { useState } from 'react'
import { Button } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const tabs = [{ name: 'Skiing', icon: 'ski' }, { name: 'Biking', icon: 'bike-fast' }, { name: 'Running', icon: 'run-fast' }];

export default function Sport({ onSportChange }) {

  const [value, setValue] = React.useState(0);

  const handleSportChange = (index) => {
    setValue(index); // Päivitetään valittu index
    onSportChange(tabs[index].name); // Kutsutaan callbackia ja välitetään valittu laji
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
                    isActive && { backgroundColor: '#e0e7ff' },
                  ]}>
                  <MaterialCommunityIcons
                    name={item.icon}
                    size={20}
                    color={isActive ? '#4338ca' : 'black'}
                    style={{ marginRight: 8 }}
                  />
                  <Text style={[styles.text2, isActive && { color: '#4338ca' }]}>
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
