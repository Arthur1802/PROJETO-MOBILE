import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '../hooks/useColorScheme'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function Layout() {
    const colorScheme = useColorScheme()
    const [loaded] = useFonts({
        Poppins_Regular: require('../assets/fonts/Poppins-Regular.ttf'),
        Poppins_Black: require('../assets/fonts/Poppins-Black.ttf'),
        Poppins_BlackItalic: require('../assets/fonts/Poppins-BlackItalic.ttf'),
        Poppins_Bold: require('../assets/fonts/Poppins-Bold.ttf'),
        Poppins_BoldItalic: require('../assets/fonts/Poppins-BoldItalic.ttf'),
        Poppins_ExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
        Poppins_Italic: require('../assets/fonts/Poppins-Italic.ttf'),
        Poppins_Light: require('../assets/fonts/Poppins-Light.ttf'),
        Poppins_LightItalic: require('../assets/fonts/Poppins-LightItalic.ttf'),
        Poppins_Medium: require('../assets/fonts/Poppins-Medium.ttf'),
        Poppins_MediumItalic: require('../assets/fonts/Poppins-MediumItalic.ttf'),
        Poppins_SemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
        Poppins_SemiBoldItalic: require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
        Poppins_Thin: require('../assets/fonts/Poppins-Thin.ttf'),
    })

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync()
        }
    }, [loaded])

    if (!loaded) {
        return null
    }

    return (
        <ThemeProvider value = {colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name = "index" options = {{ headerShown: false }} />
                <Stack.Screen name = "(auth)" options = {{ headerShown: false }} />
                <Stack.Screen name = "(tabs)" options = {{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    )
}