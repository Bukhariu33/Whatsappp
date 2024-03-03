import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PersonalChats({ profileImg, Name, Last, Time, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.chatContainer}>
        <Image source={profileImg} style={styles.profileImageStyle} />
        <View style={styles.chatContent}>
          <View style={styles.chatText}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Name}</Text>
            <Text>{Last}</Text>
          </View>
          <Text style={{ alignSelf: 'flex-end' }}>{Time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profileImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  chatContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    padding: 10,
    alignItems: 'center'
  },
  chatContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10
  },
  chatText: {
    flex: 1,
    marginRight: 10
  }
})
