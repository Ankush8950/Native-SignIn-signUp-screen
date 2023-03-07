import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Background from "./Background";
import { dark, green, gray } from "./constants";
import Fields from "./Fields";
import Button from "./Button";

const Login = (props) => {
  return (
    <Background>
      <View style={{ alignItems: "center", width: 370 }}>
        <Text
          style={{
            color: dark,
            fontSize: 55,
            fontWeight: "bold",
            marginVertical: 50,
          }}
        >
          Login
        </Text>
        <View
          style={{
            backgroundColor: "white",
            height: 600,
            width: 370,
            paddingRight: 10,
            borderTopLeftRadius: 120,
            paddingVertical: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: dark }}>Welcome Back</Text>
          <Text
            style={{
              fontSize: 17,
              color: gray,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <View style={{ marginTop: 40 }}>
            <Fields
              placeholder="Email / Username"
              keyboardType={"email-address"}
            />
            <Fields placeholder="Password" secureTextEntry={true} />
          </View>
          <View style={{ alignItems: "flex-end", width: 300,marginBottom:20 }}>
            <Text style={{ color: green, fontWeight: "bold" }}>
              Forgot Password ?
            </Text>
          </View>
          <Button textColor="white" bgColor={green} btnLabel="Login" />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: gray }}>
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text style={{ color: green, fontWeight: "bold", fontSize: 16 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;
