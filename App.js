//Main app component
import * as React from 'react';
import MainScreen from './components/MainScreen';
import SettingScreen from './components/SettingScreen';
import ScannerScreen from './components/ScannerScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App(){
  const Tab=createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ScannerScreen}
          options={{
            title: 'Scanner',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="camera" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            title: 'Settings',
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="cog" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};