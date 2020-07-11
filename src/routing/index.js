import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import route1 from './route1';
import route2 from './route2';
import route3 from './route3';
import route4 from './route4';

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="one" component={route1} />
    <Tab.Screen name="two" component={route2} />
    <Tab.Screen name="three" component={route3} />
    <Tab.Screen name="four" component={route4} />
  </Tab.Navigator>
);


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRoute={TabNavigator}>
    <Drawer.Screen name="Home" component={TabNavigator} />
  </Drawer.Navigator>
);

const App = () => (<NavigationContainer><DrawerNavigator/></NavigationContainer>);

export default App;
