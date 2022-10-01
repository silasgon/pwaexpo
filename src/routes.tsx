import React from 'react';
import { Feather } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Camera from './pages/Camera';
import Main from './pages/Main';

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    tabBarIcon: ({ color }) => <Feather name='home' size={20} />
                }}
                    name="Main"
                    component={Main}
                />
                <Tab.Screen options={{
                    tabBarIcon: ({ color }) => <Feather name='camera' size={20} />
                }}
                name="Camera"
                component={Camera} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}