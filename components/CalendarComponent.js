import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { View, Modal, Text, Pressable } from 'react-native';
import { styles } from "../styles/Styles";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function CalendarComponent({ date, onDateChange }) {
    const [visible, setVisible] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Kuukaudet ovat 0-indeksoituja
        return `${day}.${month}.${date.getFullYear()}`;
      };

    const dateSelected = (day) => {
        console.log("Selected date:", day.dateString);
        onDateChange(day.dateString); 
        setVisible(false);
    }

    return (
        <View>
            <Modal visible={visible} transparent={false}>
                <View style={styles.modal}>
                <Calendar 
                    style={{ borderWidth: 1 }} 
                    onDayPress={dateSelected} 
                    markedDates={{
                        [date]: { selected: true, selectedColor: 'blue' }
                    }}/>
                </View>
            </Modal>
            <Pressable style={styles.pressable} onPress={() =>setVisible(true)}>
                <Icon name="calendar" size={20} color="black" />
                <Text style={styles.calText}>
                    {date ? formatDate(date) : 'Select Date'}</Text>
            </Pressable>
        </View>
    );
}
