import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icons from "@expo/vector-icons/Ionicons"

import CustomDrawer from '../components/CustomDrawer';

import HomePage from "../pages/Home"
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import CheckoutPage from '../pages/Checkout';
import SuccessPage from '../pages/Success';
import { colors } from '../styles/colors';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerPosition: "right",
          drawerActiveTintColor: colors.primary,
          drawerInactiveBackgroundColor: colors.white,
          drawerActiveBackgroundColor: colors.white,
        }}
        drawerContent={props => <CustomDrawer {...props} />}
      >

        <Drawer.Screen options={{
          drawerIcon: ({ color }) => (
            <Icons name="home-outline" size={22} color={color} />
          )
        }} name="Home" component={HomePage} />
        <Drawer.Screen options={{
          drawerIcon: ({ color }) => (
            <Icons name="person-add-outline" size={22} color={color} />
          )
        }} name="Login" component={LoginPage} />
        <Drawer.Screen options={{ drawerItemStyle: { height: 0 } }} name="Register" component={RegisterPage} />
        <Drawer.Screen options={{ drawerItemStyle: { height: 0 } }} name="Checkout" component={CheckoutPage} />
        <Drawer.Screen options={{ drawerItemStyle: { height: 0 } }} name="SuccessPage" component={SuccessPage} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;