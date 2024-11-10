import { StyleSheet, useColorScheme, View } from 'react-native'
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

const HEADER_HEIGHT = 50

export default function ParallaxScrollView({ children, headerImage, headerHeight, headerBackgroundColor, style, ...otherProps }) {
  const colorScheme = useColorScheme() ?? 'light'
  const scrollRef = useAnimatedRef()
  const scrollOffset = useScrollViewOffset(scrollRef)

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(scrollOffset.value, [-HEADER_HEIGHT, 0, HEADER_HEIGHT], [2, 1, 1]),
        },
      ],
    }
  })

  return (
    <SafeAreaView style = {[styles.container, {style}]}>
      <Animated.ScrollView ref = {scrollRef} scrollEventThrottle = {16}>
        <Animated.View
          style = {[
            styles.header,
            { backgroundColor: headerBackgroundColor[colorScheme] },
            headerAnimatedStyle,
          ]}>
          {headerImage}
        </Animated.View>
        <View style = {[styles.content, {style}]}>{children}</View>
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    overflow: 'hidden',
  },
  content: {
    padding: 20,
  },
})