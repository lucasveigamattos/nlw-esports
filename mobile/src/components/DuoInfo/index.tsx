import {View, Text} from "react-native"

import {styles} from "./styles"

interface DuoInfoProps {
    label: string,
    info: string,
    infoColor: string
}

function DuoInfo(props: DuoInfoProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={{...styles.info, color: props.infoColor}}>{props.info}</Text>
        </View>
    )
}

export default DuoInfo