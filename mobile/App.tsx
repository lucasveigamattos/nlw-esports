import {StatusBar} from "expo-status-bar"
import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black} from "@expo-google-fonts/inter"

import Routes from "./src/routes"
import Background from "./src/components/Background"

import Loading from "./src/components/Loading"

export default function App() {  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black
  })

  return (
    <Background>
      <StatusBar style="light"/>
      {fontsLoaded ? <Routes/> : <Loading/>}
    </Background>
  )
}