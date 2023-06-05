import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.COLORS.OVERLAY
    },
    modal: {
        paddingTop: 16,
        paddingHorizontal: 16,
        paddingBottom: 32,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8
    },
    header: {
        alignItems: "flex-end"
    },
    infoWrapper: {
        alignItems: "center"
    },
    checkCircle: {
        marginBottom: 24
    },
    customHeading: {
        alignItems: "center",
        marginBottom: 24
    },
    label: {
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        marginBottom: 8
    },
    discordButton: {
        borderRadius: 8,
        paddingVertical: 11,
        paddingHorizontal: 60,
        backgroundColor: THEME.COLORS.BACKGROUND_800
    },
    discord: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.MD,
        color: "#E4E4E7"
    }
})