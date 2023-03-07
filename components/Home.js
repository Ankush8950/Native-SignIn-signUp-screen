import React from "react"
import {Text, View } from 'react-native';
import Background from "./Background";
import Button from "./Button";
import { dark } from "./constants";



const HomeScreen = (props) => {
  return (
    <Background>
      <View style={{marginHorizontal:30,marginVertical:100}}>
        <Text style={{color:"white", fontSize:55, textTransform: 'capitalize'}}>Let's start</Text>
        <Text style={{color:"white", fontSize: 55, textTransform: 'capitalize',marginVertical:10,paddingBottom: 50}} >coding</Text>
        <Button bgColor={dark} textColor="white" btnLabel="Login" Press={()=>props.navigation.navigate("Login")} />
        <Button  bgColor="white" textColor={dark} btnLabel="Sign Up" Press={()=>props.navigation.navigate("Signup")}/>
      </View>
    </Background>
  );
}

export default HomeScreen

