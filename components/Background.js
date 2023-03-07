import React from 'react'
import { View, ImageBackground } from 'react-native';

const Background = ({children}) => {
  return (
    <View>
        <ImageBackground source={require("../assets/background1.jpg")} 
            style={{height:"100%",opacity:0.6}}
        />
        <View style={{position: 'absolute'}}>
            {children}
        </View>
    </View>
  )
}

export default Background