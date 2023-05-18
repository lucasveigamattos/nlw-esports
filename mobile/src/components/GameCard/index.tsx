import {Text, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType} from "react-native"

import {styles} from "./styles"
import {THEME} from "../../theme"
import {LinearGradient} from "expo-linear-gradient"

interface GameCardProps extends TouchableOpacityProps {
    name: string,
    ads: number,
    bannerUrl: ImageSourcePropType
}

function GameCard({name, ads, bannerUrl, ...rest}: GameCardProps) {
    return (
        <TouchableOpacity {...rest}>
            <ImageBackground source={bannerUrl} style={styles.banner}>
                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.ads}>{ads} anúncio(s)</Text>
                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default GameCard