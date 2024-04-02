import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Chat, Intro, Welcome } from '../screens'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}} initialRouteName='Intro' >
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Intro' component={Intro} />
            <Stack.Screen name='Chat' component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation