export default function boxShadow(
    shadowOffsetWidth = 0,
    shadowOffsetHeight = 0,
    shadowRadius = 0,
    shadowOpacity = 0,
    shadowColor = "transparent"
) {
    return {
        shadowOffset: { width: shadowOffsetWidth, height: shadowOffsetHeight },
        shadowRadius: shadowRadius,
        shadowOpacity: shadowOpacity,
        shadowColor: shadowColor,
    }
}