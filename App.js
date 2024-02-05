import { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BA from './screens/BA';
import MG from './screens/MG';
import SC from './screens/SC';
import RS from './screens/RS';
import SP from './screens/SP';

import Home from './screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'BA'} component={BA} />
        <Stack.Screen name={'MG'} component={MG} />
        <Stack.Screen name={'SC'} component={SC} />
        <Stack.Screen name={'RS'} component={RS} />
        <Stack.Screen name={'SP'} component={SP} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
