import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

export default function Message({ onMessageChange }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    onMessageChange(message);
    setMessage('')
  };

  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.messageContainer}>
          <Entypo name="emoji-happy" size={24} color="black" />
          <TextInput
            style={{ flex: 1, marginHorizontal: 10 }}
            placeholder='Message'
            multiline
            value={message}
            onChangeText={text => setMessage(text)}
          />
          <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
            <Entypo name="attachment" size={24} color="black" style={{ marginRight: 10 }} />
            <AntDesign name="camerao" size={24} color="black" />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center", backgroundColor: '#0c4f20', borderRadius: 20 }}>
          <TouchableOpacity onPress={sendMessage}>
            <Ionicons name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = {
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    width: '85%'
  }
};
