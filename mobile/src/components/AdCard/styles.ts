import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        padding: 20,
        backgroundColor: THEME.COLORS.SHAPE
    },
    infoSection: {
        display: "flex",
        gap: 16,
        marginBottom: 16
    },
    button: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 24,
        backgroundColor: THEME.COLORS.PRIMARY
    },
    buttonText: {
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT
    }
})