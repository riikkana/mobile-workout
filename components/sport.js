import { View, Text, StyleSheet, TouchableWithoutFeedback, SafeAreaView } from "react-native";
import { styles } from "../styles/Styles";
import React, {useState} from 'react'
import { Button } from "react-native-paper";

const tabs = [{ name: 'Skiing' }, { name: 'Biking' }, { name: 'Running' }];

export default function Sport() {
  
  
    const [value, setValue] = React.useState(0);
  
    return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container2}>
        {tabs.map((item, index) => {
          const isActive = index === value;
          return (
            <View key={item.name} style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  setValue(index);
                }}>
                <View
                  style={[
                    styles.item2,
                    isActive && { backgroundColor: '#e0e7ff' },
                  ]}>
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
