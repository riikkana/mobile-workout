import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Alert, ScrollView, StatusBar } from "react-native";
import { styles } from "../styles/Styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { DATA } from "./Data";

export default function ThirdScreen() {

    let testData = [];
    for (let index = 0; index < 50; index++) {
      testData = [...DATA, ...testData];
    }

    return (
      <View style={{marginTop: StatusBar.currentHeight || 0}}>
        <ScrollView>
        {testData.map((item, index) =>
          <Text style={{fontSize:20}} key={index}>{item.fname}</Text>
        )}
        </ScrollView>
      </View>
    )

}

// react native paper Dialog "alertille"