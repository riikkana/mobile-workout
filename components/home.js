import { View, Text } from "react-native";
import { styles } from "../styles/Styles";
import React, { useState } from 'react';
import CalendarComponent from "./CalendarComponent";
import { Button } from "react-native-paper";
import Distance from "./distance";
import Sport from "./sport";
import Duration from "./duration";

//const currentStyle = on ? darkStyle : styles



export default function HomeScreen() {
    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>Add new workout</Text>
            </View>
            <View style={{padding: 20}}>
            <CalendarComponent />
            <Sport />
            <Distance />
            <Duration />
            </View>
            <View style={{ paddingTop: 20 }}>
                <Button style={styles.button} mode="contained">Add workout</Button>
            </View>
        </View>
    );
};
