import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomePage from "../pages/Home"
import LoginPage from '../pages/Login';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: false,
        drawerPosition: "right"
      }}>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen name="Login" component={LoginPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;