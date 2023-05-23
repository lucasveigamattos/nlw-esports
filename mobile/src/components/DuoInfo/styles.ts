import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 4
    },
    label: {
        fontSize: 14,
        color: "#C4C4C6"
    },
    info: {
        fontFamily: THEME.FONT_FAMILY.BOLD,
        fontSize: 14,
    }
})