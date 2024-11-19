import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import SavedScreen from "../screens/SavedScreen";
import { FaceSmileIcon, HomeIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function AppNavigation() {

    function HomeStack() {
        return (
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}
                initialRouteName='Welcome'


            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="HomeTab" component={HomeTabs} />


            </Stack.Navigator>
        )
    }

    function HomeTabs() {
        return (
            <Tab.Navigator>

                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <HomeIcon size={24} color={focused ? "blue" : "gray"}
                        />
                    ),
                }}
                />
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <MagnifyingGlassIcon size={24} color={focused ? "blue" : "gray"} />
                    ),
                }} />
                <Tab.Screen name="Saved" component={SavedScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <FaceSmileIcon size={24} color={focused ? "blue" : "gray"} />
                    ),
                }} />
            </Tab.Navigator>
        )
    }


    return (


        <NavigationContainer>
            <HomeStack />
        </NavigationContainer>
    )
}