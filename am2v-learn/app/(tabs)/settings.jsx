import { StyleSheet, Image, View, Text, useColorScheme } from 'react-native'
import ParallaxScrollView from '../../components/ParallaxScrollView'
import { ThemedLogo } from '../../components/ThemedLogo'
import { ThemedText } from '../../components/ThemedText'
import { ExternalLink } from '../../components/ExternalLink'

export default function SettingsScreen() {
    const colorTheme = useColorScheme() ?? 'light'
    return (
        <ParallaxScrollView
            headerImage = {
                <ThemedLogo source = "sm_logo" type = {"logo"} />
            }
            headerBackgroundColor = {styles.headerBackgroundColor}
        >
            <View style = {[styles.titleContainer, styles.container]}>

                <ThemedText type = "title">Settings</ThemedText>

                <View style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                    <ThemedText type = "">Language</ThemedText>
                </View>
                <View style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                    <ThemedText type = "">Theme</ThemedText>
                </View>
                <View style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                    <ThemedText type = "">Contact</ThemedText>
                </View>
                <View style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                    <ThemedText type = "">Log Out</ThemedText>
                </View>

                <View style = {styles.settings_footer}>
                    <View>
                        <ThemedText>Copyright © 2024 AM2VLearn</ThemedText>
                        <ThemedText>Made by:</ThemedText>
                    </View>
                    <View>
                        <ExternalLink href = "https://github.com/Arthur1802" style = {styles.link}>Arthur Quinellato</ExternalLink>
                        <ExternalLink href = "https://github.com/Petrakis020" style = {styles.link}>Matheus Petrakis</ExternalLink>
                        <ExternalLink href = "https://github.com/vitoriomuniz26" style = {styles.link}>Vitório Muniz</ExternalLink>
                    </View>
                </View>
            </View>
        </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },
    headerBackgroundColor: {
        light: 'transparent',
        dark: 'transparent',
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 20,
    },
    settingControls: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 10,
        width: '100%',
    },
    settingControlsBackground: {
        light: '#ccc',
        dark: '#323232',
    },
    link: {
        color: '#007bff',
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    settings_footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        width: '100%',
    }
})