import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './pages/main';
import Login from './pages/login';
import User from './pages/user';
import Cadaster from './pages/cadaster';
import Perfil from './pages/perfil';


const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen name='perfil' component={Perfil} options={{
          title: '',
          headerTransparent: true,
          headerShown: false,
        }}/>
        <Stack.Screen
          name="user"
          component={User}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cadaster"
          component={Cadaster}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
