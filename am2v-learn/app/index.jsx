import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ThemedText } from '../components/ThemedText'
import { ThemedLogo } from '../components/ThemedLogo'
import ParallaxScrollView from '../components/ParallaxScrollView'
import { Link } from 'expo-router'

export default function Welcome() {
    return (
        <ParallaxScrollView
            headerBackgroundColor = {{ light: 'transparent', dark: 'transparent' }}
            headerImage = {
                <ThemedLogo source = {"lg_logo"} type = {"logo"} />
            }
        >
            <View style = {styles.container}>
                <ThemedText style = {StyleSheet.title}>Welcome to AM2V Learn</ThemedText>

                <Link href = "login">Login</Link>
                <Link href = "signin">Sign In</Link>
                <Link href = "(tabs)">Tabs</Link>
            </View>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        fontSize: 16,

    },  
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})