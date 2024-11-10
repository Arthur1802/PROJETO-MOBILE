import { Link } from 'expo-router'
import { openBrowserAsync } from 'expo-web-browser'
import { Platform } from 'react-native'

export function ExternalLink({ href, style, ...rest }) {
  return (
    <Link
      style = {style}
      target = "_blank"
      {...rest}
      href = {href}
      onPress = {async (event) => {
        if (Platform.OS !== 'web') {
          event.preventDefault()
          await openBrowserAsync(href)
        }
      }}
    />
  )
}