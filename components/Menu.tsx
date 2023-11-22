import React from 'react'
import { View } from 'react-native'
import { Link } from "expo-router";

const Menu = () => {
    return (
        <View>
            <Link href="/">Inicio</Link>
            <Link href="/home">Home</Link>
            <Link href="/settings">Settings</Link>
        </View>
    )
}

export default Menu