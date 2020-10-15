import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Main from './src/pages/Main';
import DiasViagem from './src/pages/DiasViagem'

export default function App() {
  
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Planejador de Viagem">

        <Stack.Screen name="Planejador de Viagem" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Dias da Viagem" component={DiasViagem} options={{ headerShown: false }}/>
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}