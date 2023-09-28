import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './LoginScreen';
import SignupScreen from './CadastroScreen'; // Supondo que você tenha uma tela de cadastro

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={SignupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
