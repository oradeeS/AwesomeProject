import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import Welcome from './screens/Welcome';


//import Network from './screens/NetworkScreen';

import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';
import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
import FlexStack from './navigations/FlexStack';
const RootStack = createStackNavigator();

import TodoTab from './navigations/TodoTab';

import { fb } from './db_config';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="BottomTab">
                <RootStack.Screen 
                    name="BottomTab" 
                    component={BottomTab} 
                    options={{  title: 'Main' , headerShown: false   }} 
                    />

                <RootStack.Screen 
                    name="SecondBottomTab" 
                    component={SecondBottomTab} 
                    options={{  title: 'Second Tab'   }} 
                    />
                <RootStack.Screen 
                    name="TodoTab" 
                    component={TodoTab} 
                    options={{  title: 'Todo Tab'   }} 
                    />                        
            </RootStack.Navigator>
    </NavigationContainer>
  );
}

