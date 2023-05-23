import {useState, useEffect} from "react"
import {Image, FlatList} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"
import {useNavigation} from "@react-navigation/native"

import Heading from "../../components/Heading"
import GameCard from "../../components/GameCard"

import {styles} from "./styles"
import logoImage from "../../assets/logo-nlw-esports.png"

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        ads: number
    }
}

function Home() {
    const [games, setGames] = useState<Game[]>([])
    const navigation = useNavigation()

    async function getGames() {
        const response = await fetch("http://192.168.15.11:3000/games")
        const data = await response.json()

        setGames(data.games)
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <Image source={logoImage} style={styles.logo}/>
            <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..."/>
            <FlatList data={games} keyExtractor={game => game.id} renderItem={game => {
                return (
                    <GameCard key={game.item.id} name={game.item.title} ads={game.item._count.ads} bannerUrl={game.item.bannerUrl} onPress={() => {
                        navigation.navigate("game", {id: game.item.id, name: game.item.title, bannerUrl: game.item.bannerUrl})
                    }}/>
                )
            }} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.flatList}/>
        </SafeAreaView>
    )
}

export default Home