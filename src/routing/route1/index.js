import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ScreenOne from '../../screens/screen1/Screen1';
import ScreenTwo from '../../screens/screen1/Screen2';

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Screen one" component={ScreenOne} />
    <Stack.Screen name="Screen two" component={ScreenTwo} />
  </Stack.Navigator>
);

export default StackNavigator;
