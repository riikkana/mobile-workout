import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Text, Button, TextInput, Provider } from 'react-native-paper';
import { styles } from './styles/Styles.js'
import MyComponent from './components/bottomNav.js';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MyComponent />
      </NavigationContainer>
    </PaperProvider>
  );
}

