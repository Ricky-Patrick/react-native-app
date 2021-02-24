import { createStackNavigator } from 'react-navigation-stack'
import { crateAppcontainer, createAppContainer } from 'react-navigation'

import Home from '../components/Home'
import About from '../components/About'
import Cart from '../components/Cart'

const screens = {
    Home : {
        screen : Home
    },
    About : {
        screen : About
    },
    Cart : {
        screen : Cart
    }
}

const RootStack = createStackNavigator(screens,{headerMode:'none'})

export default createAppContainer(RootStack)