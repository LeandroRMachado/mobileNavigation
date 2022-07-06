import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Backdoor } from '../screens/Backdoor';
import { Home } from '../screens/Home';

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home} 
      />

      <Screen
        name="Backdoor"
        component={Backdoor}
      />
    </Navigator>
  );
}