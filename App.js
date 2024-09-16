import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles/Styles.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.important, styles.box, {fontSize: 40}]}>Hello!</Text>
    </View>
  );
}


