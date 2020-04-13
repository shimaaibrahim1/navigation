import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Posts from '../screens/Posts'
import Profile from '../screens/Home'
import Stack from './stack'
import Home  from './pstack'
const Tab = createBottomTabNavigator();
  
export default function () {
    return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions= {{
            activeBackgroundColor: 'whitesmoke',
            labelStyle: {
                fontSize: 14,
                marginBottom: 15
            },            
                }}>
                  
          <Tab.Screen name="Posts" component={Stack} />
          <Tab.Screen name="Profile" component={Home} />

        </Tab.Navigator>
      </NavigationContainer>
    );
  }
  