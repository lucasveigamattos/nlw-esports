import {View, ViewProps, Text} from "react-native"

import {styles} from "./styles"

interface HeadingProps extends ViewProps {
    title: string,
    subtitle: string
}

function Heading({title, subtitle, ...rest}: HeadingProps) {
    return (
        <View style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

export default Heading