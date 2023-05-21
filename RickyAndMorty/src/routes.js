import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './pages/login.js';
import Cadaster from './pages/cadaster.js';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login} options={{
          title: '',
          headerTitleAlign: 'center',
          headerTransparent: true,
          headerShown: false,
        }}/>
        <Stack.Screen name='Cadaster' component={Cadaster}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

