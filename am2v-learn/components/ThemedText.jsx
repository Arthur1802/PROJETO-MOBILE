import { Text, StyleSheet } from 'react-native'

import { useThemeColor } from '../hooks/useThemeColor'

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text')

  return (
    <Text
      style = {[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  default: {
    fontFamily: require('../assets/fonts/Poppins-Regular.ttf'),
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: require('../assets/fonts/Poppins-SemiBold.ttf'),
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    fontFamily: require('../assets/fonts/Poppins-Bold.ttf'),
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: require('../assets/fonts/Poppins-SemiBold.ttf'),
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
})