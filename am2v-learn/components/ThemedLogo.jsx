import { Image, ImageBackground, StyleSheet } from 'react-native'
import { useColorScheme } from 'react-native'

// App logos
import smDarkLogo from '../assets/logos/sm_logo_dark.png'
import smLightLogo from '../assets/logos/sm_logo_light.png'
import lgDarkLogo from '../assets/logos/lg_logo_dark.png'
import lgLightLogo from '../assets/logos/lg_logo_light.png'

// Module logos
import htmlLogoDark from '../assets/moduleIcons/light/html_light.png'
import htmlLogoLight from '../assets/moduleIcons/dark/html_dark.png'
import cssLogoDark from '../assets/moduleIcons/light/css_light.png'
import cssLogoLight from '../assets/moduleIcons/dark/css_dark.png'
import jsLogoDark from '../assets/moduleIcons/light/js_light.png'
import jsLogoLight from '../assets/moduleIcons/dark/js_dark.png'
import htmlCssJsLogoDark from '../assets/moduleIcons/light/html_css_js_light.png'
import htmlCssJsLogoLight from '../assets/moduleIcons/dark/html_css_js_dark.png'

export function ThemedLogo({ source, type, style, ...otherProps }) {
    const theme = useColorScheme() ?? 'light'
    switch (source) {
        case 'lg_logo':
            logo = theme === 'light' ? lgLightLogo : lgDarkLogo
            break
        case 'html_logo':
            logo = theme === 'light' ? htmlLogoLight : htmlLogoDark
            break
        case 'css_logo':
            logo = theme === 'light' ? cssLogoLight : cssLogoDark
            break
        case 'js_logo':
            logo = theme === 'light' ? jsLogoLight : jsLogoDark
            break
        case 'html_css_js_logo':
            logo = theme === 'light' ? htmlCssJsLogoLight : htmlCssJsLogoDark
            break
        default:
            logo = theme === 'light' ? smLightLogo : smDarkLogo
            break
    }

    if (type === 'logo') {
        return <Image source = {logo} style = {[styles.logo, {style}]} {...otherProps} />
    } else if (type === 'background') {
        return <ImageBackground source = {logo} style = {[styles.background, {style}]} {...otherProps} />
    } else {
        return <Image source = {logo} style = {[styles.icon, {style}]} {...otherProps} />
    }

}

const styles = StyleSheet.create({
    logo: {
    },
    icon: {
        width: 35,
        height: 35
    }
})