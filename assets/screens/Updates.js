import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo} from '@expo/vector-icons';

export default function Updates() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.info}>
        <Image source={require('../../assets/profileimages/cloe.jpg')} style={styles.profileImage}/>
          <View style={{marginHorizontal:10}}>
          <Text style={styles.viewCount}>64 Views</Text>
          <Text style={styles.time}>Yesterday, 6:23 pm</Text>

          </View>
          
        </View>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <View style={styles.separator}>
        
      </View>
      <View style={{flexDirection:'row', padding:10, alignItems:'center'}}>
        <Entypo name="lock" size={20} color="black" />
        <Text style={{marginHorizontal:10}}>Your Status Updates are end-to-end encrypted. They will disappear after 24 hours</Text>
        </View>
        <View style={{flex:1, justifyContent:'flex-end', alignItems:'flex-end', marginBottom:100, marginHorizontal:20}}>
        <View style={{width:50, height:50, backgroundColor:'green', justifyContent:'center', alignItems:'center', borderRadius:10}}>
        <Entypo name="camera" size={24} color="white" />
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
  },
  info: {
    marginLeft: 10,
    flexDirection:'row',
    justifyContent:'center', 
    alignItems:'center'
  },
  viewCount: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
  },
  separator: {
    borderWidth:0.4,
    borderBottomColor: 'black',
    marginTop: 10,
  },
});
