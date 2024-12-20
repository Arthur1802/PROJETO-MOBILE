import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '../../components/navigation/TabBarIcon'
import { Colors } from '../../constants/Colors'
import { useColorScheme } from '../../hooks/useColorScheme'

export default function TabLayout() {
    const colorScheme = useColorScheme()

    return (
        <Tabs
            screenOptions = {{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: false,
            }}>
            <Tabs.Screen
                name = "Index"
                options = {{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name = {focused ? 'home' : 'home-outline'} color = {color} />
                    ),
                }}
            />
            <Tabs.Screen
                name = "Profile"
                options = {{
                    title: 'Profile',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name = {focused ? 'person-circle' : 'person-circle-outline'} color = {color} />
                    ),
                }}
            />
            <Tabs.Screen
                name = "Settings"
                options = {{
                    title: 'Settings',
                    tabBarIcon: ({ color, focused }) => (
                        <TabBarIcon name = {focused ? 'settings' : 'settings-outline'} color = {color} />
                    ),
                }}
            />
        </Tabs>
    )
}