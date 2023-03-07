import React, { useState } from 'react'
import Checkbox from 'expo-checkbox';
import {Text ,StyleSheet, View,TouchableOpacity, Alert } from 'react-native';
import Background from './Background';
import Button from './Button';
import { dark, gray,green } from './constants';
import Fields from './Fields';

const SignUp = (props) => {
  const [signup,setSignUp] = useState({
    fullname:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:"",
  })
  const [agree,setAgree] = useState(false)

  const onHandleChange = (e) =>{
    const data = {...signup}
    data[e.target.name] = e.target.value
    setSignUp(data) 
  }

  const submit = () =>{
    onHandleChange()
    if(!(signup.fullname && signup.email && signup.phone && signup.password && signup.confirmPassword)){
      Alert.alert("Fill the all details")
    }else{
      Alert.alert(`${fullname} registration successfull `)
    }
  }

  return (
    <Background>
       <View style={{alignItems:"center",width:370}}>
       <View style={{marginVertical:40,alignItems:'center'}}>
            <Text style={{color:{dark},fontSize:55 ,fontWeight:"bold"}}>Sign Up</Text>
            <Text style={{color:"white",fontSize:15 ,fontWeight:"bold"}}>Create a New account</Text>
            </View>
            <View style={{backgroundColor:"white",height:600,width:370,borderTopLeftRadius: 120, paddingTop:50,alignItems:"center",paddingRight:10}}>
           
            <Fields placeholder="Full Name" value={signup.fullname} onChangeText={(text)=>setSignUp({fullname:text})} />
            <Fields placeholder="Email / Username" keyboardType={"email-address"} value={signup.email} onChangeText={(text)=>setSignUp({email:text})} />
            <Fields placeholder="Contact Number" value={signup.phone} onChangeText={(text)=>setSignUp({phone:text})}/>
            <Fields placeholder="Password" secureTextEntry={true} value={signup.password} onChangeText={(text)=>setSignUp({password:text})}/>
            <Fields placeholder="confirm Password" secureTextEntry={true} value={signup.confirmPassword} onChangeText={(text)=>setSignUp({confirmPassword:text})}/>
              <View style={{ alignItems: "flex-end", width: 300,marginBottom:10 }}>
            <Text style={{ color: green, fontWeight: "bold" }}>
              Forgot Password ?
            </Text>
            
          </View>
          <View style={{display:"flex",flexDirection:"row", alignItems:"center"}}>
            {/* <Checkbox /> */}
            <Text style={{marginLeft:10}}>I have read and agreed with the t&c</Text>
            </View>
            <Button textColor="white" bgColor={green} btnLabel="Sign Up" Press={submit}/>
            <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: gray }}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
                Login
              </Text> 
            </TouchableOpacity>
          </View>
            </View>
       </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  buttonBtn:{
    backgroundColor: "red",

  }
})

export default SignUp