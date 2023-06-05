import {View, Modal, ModalProps, Text, Image, TouchableOpacity} from "react-native"
import * as Clipboard from "expo-clipboard"

import Heading from "../Heading"

import closeModalButton from "../../assets/close-modal-button.png"
import checkCircle from "../../assets/check-circle.png"
import {styles} from "./styles"

interface SuccessModalProps extends ModalProps {
    discord: string,
    onClose: () => void
} 

function SuccessModal({discord, onClose, ...rest}: SuccessModalProps) {
    async function copyToClipboard() {
        await Clipboard.setStringAsync(discord)
    }

    return (
        <Modal transparent statusBarTranslucent {...rest}>
            <View style={styles.container}>
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={onClose}>
                            <Image source={closeModalButton}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoWrapper}>
                        <Image source={checkCircle} style={styles.checkCircle}/>
                        <Heading title="Let's play!" subtitle="Agora é só começar a jogar!" style={styles.customHeading}/>
                        <Text style={styles.label}>Adicione no Discord</Text>
                        <TouchableOpacity style={styles.discordButton} onPress={copyToClipboard}>
                            <Text style={styles.discord}>{discord}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default SuccessModal