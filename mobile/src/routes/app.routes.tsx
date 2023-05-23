import {createNativeStackNavigator} from "@react-navigation/native-stack"

import Home from "../screens/Home"
import Game from "../screens/Game"

const {Navigator, Screen} = createNativeStackNavigator()

function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false, contentStyle: {backgroundColor: "transparent"}}}>
            <Screen name="home" component={Home}/>
            <Screen name="game" component={Game}/>
        </Navigator>
    )
}

export default AppRoutes