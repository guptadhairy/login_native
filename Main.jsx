import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

const Main = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='home' >
            <Stack.Screen name='home' component={Home} options={{headerShown: false}}/>
            <Stack.Screen name='signup' component={SignUp} options={{headerShown: false}}/>
            <Stack.Screen name='login' component={Login} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Main