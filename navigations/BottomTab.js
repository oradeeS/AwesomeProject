import * as React from 'react';
import HomeScreen from '../screens/HomeScreen';
import AntScreen from '../screens/AntScreen';
import BirdScreen from '../screens/BirdScreen';
import CatScreen from '../screens/CatScreen';
import HomeStack from '../navigations/HomeStack';

import FlexStack from '../navigations/FlexStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function BottomTab() {

    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch(route.name){
                    case "HomeStack" :
                        iconName = 'ios-home';
                        break;
                    case "AntScreen" : 
                        iconName = 'ios-bug';
                        break;
                    case "BirdScreen" : 
                        iconName = 'logo-twitter';
                        break;
                    case "CatScreen" : 
                        iconName = 'logo-octocat';
                        break;
                    case "FlexStack" : 
                        iconName = 'apps-outline';
                        break;
                }                        
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}

        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        }}
        >
            

        <Tab.Screen 
            name="HomeStack" 
            component={HomeStack} 
            options={{  title: 'Home'  }} 
            
            />
        <Tab.Screen 
            name="AntScreen" 
            component={AntScreen} 
            options={{  title: 'Ant'  }} 
            />  
        <Tab.Screen 
            name="BirdScreen" 
            component={BirdScreen} 
            options={{  title: 'Bird'  }} 
            />  
        <Tab.Screen 
            name="CatScreen" 
            component={CatScreen} 
            options={{  title: 'Cat'  }} 
            /> 
        <Tab.Screen 
            name="FlexStack" 
            component={FlexStack} 
            options={{  title: 'Flex'  }} 
            />           
        
    </Tab.Navigator>      
    );
}
