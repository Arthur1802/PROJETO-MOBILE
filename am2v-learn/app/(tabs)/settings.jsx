import { StyleSheet, View, TouchableOpacity, useColorScheme } from 'react-native'
import ParallaxScrollView from '../../components/ParallaxScrollView'
import { ThemedLogo } from '../../components/ThemedLogo'
import { ThemedText } from '../../components/ThemedText'
import { ExternalLink } from '../../components/ExternalLink'
// import FontAwesome from '@expo/vector-icons/FontAwesome'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRightFromBracket, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

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
                    <ThemedText style = {styles.settingsText}>Language</ThemedText>
                </View>
                
                <View style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                    <ThemedText style = {styles.settingsText}>Theme</ThemedText>
                </View>
                
                <TouchableOpacity style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                        <ThemedText style = {styles.settingsText}>Contact</ThemedText>
                        <FontAwesomeIcon icon = {faArrowUpRightFromSquare} />
                </TouchableOpacity>
                
                <TouchableOpacity style = {[styles.settingControls, {backgroundColor: styles.settingControlsBackground[colorTheme]}]}>
                        <ThemedText style = {styles.settingsText}>Log Out</ThemedText>
                        <FontAwesomeIcon icon = {faArrowRightFromBracket} />
                </TouchableOpacity>

                <View style = {styles.settingsFooter}>
                    <View style = {styles.footerCopyrightContainer}>
                        <ThemedText style = {styles.footerCopyright}>Copyright © 2024 AM2VLearn</ThemedText>
                        <ThemedText style = {styles.footerCopyright}>Made by:</ThemedText>
                    </View>
                    <View style = {styles.linkContainer}>
                        <View style = {styles.footerLinksContainer}>
                            <ExternalLink href = "https://github.com/Arthur1802" style = {styles.link}>
                                Arthur Quinellato
                            </ExternalLink>
                            <FontAwesomeIcon style = {styles.footerLinksIcons} size = {15} icon = {faArrowUpRightFromSquare} />
                        </View>
                        <View style = {styles.footerLinksContainer}>
                            <ExternalLink href = "https://github.com/Petrakis20" style = {styles.link}>
                                Matheus Petrakis
                            </ExternalLink>
                            <FontAwesomeIcon style = {styles.footerLinksIcons} size = {15} icon = {faArrowUpRightFromSquare} />
                        </View>
                        <View style = {styles.footerLinksContainer}>
                            <ExternalLink href = "https://github.com/vitoriomuniz26" style = {styles.link}>
                                Vitório Muniz
                            </ExternalLink>
                            <FontAwesomeIcon style = {styles.footerLinksIcons} size = {15} icon = {faArrowUpRightFromSquare} />
                        </View>
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
        borderRadius: 5,
        width: '100%',
    },
    settingControlsBackground: {
        light: '#ccc',
        dark: '#323232',
    },
    linkContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    footerLinksContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 1.5,
        borderBottomColor: '#007bff',
    },
    link: {
        color: '#007bff',
        fontSize: 20,
    },
    settingsFooter: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        padding: 20,
        width: '100%',
    },
    footerCopyrightContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    footerCopyright: {
        fontSize: 20,
    },
    settingsText: {
        fontSize: 20,
    },
    footerLinksIcons: {
        color: '#007bff',
    }
})