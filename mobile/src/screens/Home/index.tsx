import {View, Image, FlatList} from "react-native"

import Heading from "../../components/Heading"
import GameCard from "../../components/GameCard"

import {styles} from "./styles"
import logoImage from "../../assets/logo-nlw-esports.png"

import {GAMES} from "../../utils/game"

function Home() {
    return (
        <View style={styles.container}>
            <Image source={logoImage} style={styles.logo}/>
            <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..."/>
            <FlatList data={GAMES} keyExtractor={game => game.id} renderItem={game => {
                return (
                    <GameCard name={game.item.name} ads={game.item.ads} bannerUrl={game.item.cover}/>
                )
            }} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.flatList}/>
        </View>
    )
}

export default Home