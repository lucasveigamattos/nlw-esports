import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    banner: {
        overflow: "hidden",
        justifyContent: "flex-end",
        width: 240,
        height: 320,
        borderRadius: 8
    },
    footer: {
        width: "100%",
        paddingTop: 64,
        paddingLeft: 16,
        paddingBottom: 16
    },
    name: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT
    },
    ads: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.CAPTION_300
    }
})