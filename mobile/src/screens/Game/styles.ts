import {StyleSheet} from "react-native"
import {THEME} from "../../theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 12
    },
    navigation: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 24,
        marginBottom: 32
    },
    logo: {
        width: 71.26,
        height: 40
    },
    right: {
        width: 32
    },
    customHeadingStyle: {
        width: "100%",
        paddingHorizontal: 32,
        marginBottom: 16
    },
    bannerWrapper: {
        width: "100%",
        paddingHorizontal: 32,
        marginBottom: 24
    },
    bannerImage: {
        width: "100%",
        height: 160,
        borderRadius: 8,
    },
    flatList: {
        alignItems: "flex-start",
        gap: 16,
        paddingRight: 64,
        paddingLeft: 32,
    },
    emptyFlatList: {
        alignItems: "center"
    },
    empty: {
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        fontSize: THEME.FONT_SIZE.SM,
        color: "#C4C4C6"
    }
})