import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import MyComponent from './components/bottomNav.js';
import { useFonts } from 'expo-font';

// etusivun painikkeiden ulkoasu
// lajilaatikoiden ulkoasu: Sport ikonina, päiväys ekana ja selkeämmin
// alert -> dialog
// oikea laite

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#98246d',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MyComponent/>
      </NavigationContainer>
    </PaperProvider>
  );
}

