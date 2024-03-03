import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function TopWhats() {
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', padding:10, backgroundColor:"#0c4f20"}}>
        <Text style={{color:"white"}} >WhatsApp</Text>
          <View style={styles.homeStyles}>
            <AntDesign name="camerao" size={24} color="white" style={styles.topIconStyle}/>
            <AntDesign name="search1" size={24} color="white" style={styles.topIconStyle}/>
            <Entypo name="dots-three-vertical" size={24} color="white" style={styles.topIconStyle} />
          </View>
      </View>
  )
}


const styles = StyleSheet.create({
    homeStyles:{
      flexDirection:'row'
    },
    topIconStyle:{
      marginHorizontal:10
    }
  });
  