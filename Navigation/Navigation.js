import { createDrawerNavigator, createMaterialTopTabNavigator, createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../Screens/Login';
import Home from '../Screens/Home';


const StackNavigator = createStackNavigator({
    Login: {
        screen: Login
    },
    Home: {
        screen: Home
    }
})

const Navigator = createAppContainer(StackNavigator)

export default Navigator;