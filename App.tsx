import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold, useFonts } from "@expo-google-fonts/dm-sans";
import { ActivityIndicator } from "react-native";
import { Routes } from './src/screens/routes';
import { FavoritesProvider } from './src/contexts/favoritesContext';
import { AuthContextProvider } from './src/contexts/AuthContext';
import Toast from 'react-native-toast-message'; 

export default function App() {
  const [fontsLoaded] = useFonts({ DMSans_400Regular, DMSans_500Medium, DMSans_700Bold });

  return (
    <AuthContextProvider>
      <FavoritesProvider>
        <ThemeProvider theme={theme}>
          {fontsLoaded ? <Routes /> : <ActivityIndicator />}
          <Toast />
        </ThemeProvider>
      </FavoritesProvider>
    </AuthContextProvider>
  );
}
