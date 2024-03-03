import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function Updates() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
          <View style={[styles.profileImage, { backgroundColor: 'green' }]}>
            <Feather name="link-2" size={24} color="white" />
          </View>
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.viewCount}>Create a Call Link</Text>
            <Text style={styles.time}>Share a link for your whatsapp call</Text>
          </View>
        </View>
      </View>
      <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:100, marginHorizontal:20}}>
        <View style={{width:50, height:50, backgroundColor:'green', justifyContent:'center', alignItems:'center', borderRadius:10}}>
        <MaterialIcons name="add-call" size={24} color="white" />
        </View>
        
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewCount: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
  },
});
