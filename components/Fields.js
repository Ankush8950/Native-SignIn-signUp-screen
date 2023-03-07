import React from 'react'
import {TextInput  } from 'react-native';
import {dark,gray } from './constants';

const Fields = (props) => {
  return (
    <TextInput {...props} style={{borderRadius:100 ,color:dark,paddingHorizontal:20,width:300,height:45,backgroundColor:'rgb(220,220,220)',marginVertical:10}} placeholderTextColor={gray}  />

  )
}

export default Fields