import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function Icons({onPress, pickImage}) {
  return (
    <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Pressable style={{width:50, height:50, backgroundColor:"#474545", justifyContent:'center', alignItems:'center', borderRadius:50}} onPress={pickImage}>
        <FontAwesome name="photo" size={24} color="white" />
        </Pressable>
        <Pressable style={{width:50, height:50, backgroundColor:"#474545", justifyContent:'center', alignItems:'center', borderRadius:50}} onPress={onPress}>
        <Ionicons name="ellipse-outline" size={30} color="white" />
        </Pressable>
        <Pressable style={{width:50, height:50, backgroundColor:"#474545", justifyContent:'center', alignItems:'center', borderRadius:50}}>
        <MaterialIcons name="flip-camera-android" size={24} color="white" />
        </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({})
