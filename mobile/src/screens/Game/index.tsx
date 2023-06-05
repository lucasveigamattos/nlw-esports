import {useState, useEffect} from "react"
import {View, Text, TouchableOpacity, Image, FlatList} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import {useNavigation, useRoute} from "@react-navigation/native"

import {GameRouteParams} from "../../@types/navigation"
import {AdCardProps} from "../../components/AdCard"

import Heading from "../../components/Heading"
import AdCard from "../../components/AdCard"
import SuccessModal from "../../components/SuccessModal"

import {styles} from "./styles"
import back from "../../assets/back.png"
import logo from "../../assets/logo-nlw-esports.png"

function Game() {
    const [ads, setAds] = useState<AdCardProps[]>([])
    const [duoConnect, setDuoConnect] = useState("")

    const navigation = useNavigation()
    const game = useRoute().params as GameRouteParams

    async function getAds() {
        const response = await fetch(`http://192.168.15.11:3000/games/${game.id}/ads`)
        const data = await response.json()

        setAds(data.ads)
    }

    async function getDisocrd(adId: string) {
        const response = await fetch(`http://192.168.15.11:3000/ads/${adId}/discord`)
        return (await response.json()).discord
    }

    useEffect(() => {
        getAds()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navigation}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image source={back}/>
                </TouchableOpacity>

                <Image source={logo} style={styles.logo}/>

                <View style={styles.right}/>
            </View>

            <View style={styles.bannerWrapper}>
                <Image source={{uri: game.bannerUrl}} style={styles.bannerImage} resizeMode="cover"/>
            </View>

            <Heading title={game.name} subtitle="Conecte-se e comece a jogar!" style={styles.customHeadingStyle}/>

            <FlatList data={ads} keyExtractor={ad => ad.id} renderItem={(ad) => {
                return (
                    <AdCard key={ad.item.id} id={ad.item.id} name={ad.item.name} yearsPlaying={ad.item.yearsPlaying} weekDays={ad.item.weekDays} hourStart={ad.item.hourStart} hourEnd={ad.item.hourEnd} useVoiceChannel={ad.item.useVoiceChannel} onConnect={(discord: string) => {setDuoConnect(discord)}}/>
                )
            }} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={ads.length > 0 ? styles.flatList : styles.emptyFlatList} style={styles.containerList} ListEmptyComponent={() => (
                <Text style={styles.empty}>Não há anúncios publicados para esse jogo ainda.</Text>
            )}/>

            <SuccessModal discord={duoConnect} onClose={() => {setDuoConnect("")}} visible={duoConnect.length > 0}/>
        </SafeAreaView>
    )
}

export default Game