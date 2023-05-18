import {ImageBackground} from "react-native"

import {styles} from "./styles"
import backgroundImage from "../../assets/background-galaxy.png"

interface Props {
    children: React.ReactNode
}

function Background(props: Props) {
    return (
        <ImageBackground source={backgroundImage} defaultSource={backgroundImage} style={styles.container}>
            {props.children}
        </ImageBackground>
    )
}

export default Background