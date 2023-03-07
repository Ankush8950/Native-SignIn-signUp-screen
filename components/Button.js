import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Button = ({ bgColor, btnLabel, textColor,Press}) => {
  return (
    <TouchableOpacity
    onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: "center",
        width: 300,
        paddingVertical: 5,
        paddingRight:20,
        marginVertical: 10,
      }}
    >
      <Text style={{ color: textColor, fontSize: 22, fontWeight: "bold", textTransform: "capitalize" }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
