import {View, Text, Image, TouchableOpacity} from "react-native"

import DuoInfo from "../DuoInfo"

import {styles} from "./styles"
import {THEME} from "../../theme"
import circle from "../../assets/circle.png"
import gameController from "../../assets/game-controller.png"

export interface AdCardProps {
    id: string,
    name: string,
    yearsPlaying: string,
    weekDays: Array<string>,
    hourStart: string,
    hourEnd: string,
    useVoiceChannel: boolean
}

function AdCard(props: AdCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.infoSection}>
                <DuoInfo label="Nome" info={props.name} infoColor={THEME.COLORS.TEXT}/>
                <DuoInfo label="Tempo de jogo" info={`${props.yearsPlaying} anos`} infoColor={THEME.COLORS.TEXT}/>
                <View style={{display: "flex", gap: 4}}>
                    <Text style={{fontSize: 14, color: "#C4C4C6"}}>Disponibilidade</Text>
                    <Text style={{fontSize: 14, fontWeight: "700", color: THEME.COLORS.TEXT}}>{`${props.weekDays.length} dias`} <Image source={circle}/> {props.hourStart.slice(0, 2)}h - {props.hourEnd.slice(0, 2)}h</Text>
                </View>
                <DuoInfo label="Chamada de áudio?" info={props.useVoiceChannel ? "Sim" : "Não"} infoColor={props.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}/>
            </View>

            <TouchableOpacity style={styles.button}>
                <Image source={gameController}/>
                <Text style={styles.buttonText}>Conectar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AdCard