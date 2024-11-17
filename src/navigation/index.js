import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function AppNavigation() {

    function HomeStack() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
                initialRouteName='Welcome'


            >
                <Stack.Screen name="HomeTab" component={HomeTabs} />
                <Stack.Screen name="Welcome" component={WelcomeScreen} />

            </Stack.Navigator>
        )
    }

    function HomeTabs() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Saved" component={SavedScreen} />
            </Tab.Navigator>
        )
    }


    return (


        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}