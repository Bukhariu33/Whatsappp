// ChatScreen.js

import React, { useState, useEffect} from 'react';
import { StatusBar, View, Text, ScrollView, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';
import CameraModal from './CameraModal';

export default function ChatScreen() {
  const [userMessages, setUserMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [imageUri, setImageUri] = useState('');
  const [galleryImage, SetGalleryImage] = useState(null)

  useEffect(() => {
    loadStoredMessages();
    getCameraPermission();
  }, []);

  useEffect(() => {
    storeMessages();
  }, [userMessages]);

  useEffect(() => {
    setIsTyping(!!message);
  }, [message]);

  const loadStoredMessages = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem('chatMessages');
      if (storedMessages) {
        setUserMessages(JSON.parse(storedMessages));
      }
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const storeMessages = async () => {
    try {
      await AsyncStorage.setItem('chatMessages', JSON.stringify(userMessages));
    } catch (error) {
      console.error('Error storing messages:', error);
    }
  };

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      if (imageUri) {
        // If there's an image URI, add it as an image message
        setUserMessages(prevMessages => [
          ...prevMessages,
          { type: 'image', uri: imageUri, position:'right' },
          { type: 'text', content: message }
        ]);
        setImageUri('');
      } else {
        // If there's no image URI, add the message as a text message
        setUserMessages(prevMessages => [
          ...prevMessages,
          { type: 'text', content: message }
        ]);
      }
      setMessage('');
    }
  };
  const handleEmojiPress = (emoji) => {
    setMessage(emoji + message);
  };

  const getCameraPermission = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    setHasCameraPermission(status === 'granted');
  };

  return (
    <View style={{ flex: 1 }}>
  <StatusBar />
  {modalVisible && (
    <CameraModal
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      setImageUri={setImageUri}
      setUserMessages={setUserMessages}
      SetGalleryImage={SetGalleryImage}
    />
  )}

  <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}>
    {userMessages.map((message, index) => (
      <View
        key={index}
        style={{
          alignSelf: message.type === 'text' && index % 2 === 0 ? 'flex-end' : 'flex-start',
          marginVertical: 5,
        }}
      >
        {message.type === 'text' ? (
          <View
            style={[
              styles.messageContainer,
              { backgroundColor: index % 2 === 0 ? '#cdd9c3' : 'white' },
            ]}
          >
            <Text>{message.content}</Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: message.position === 'right' ? 'flex-end' : 'flex-start',
              marginHorizontal: 10,
              marginVertical: 5,
            }}
          >
            {message.uri && (
              <Image source={{ uri: message.uri }} style={{ width: 100, height: 100 }} />
            )}
            {message.galleryImage && (
              <Image source={{ uri: message.galleryImage }} style={{ width: 100, height: 100 }} />
            )}
          </View>
        )}
      </View>
    ))}
  </ScrollView>

  <View style={styles.inputContainer}>
    {!isTyping && (
      <TouchableOpacity style={styles.recordingButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="camera-outline" size={30} color="black" />
      </TouchableOpacity>
    )}
    {isTyping && (
      <TouchableOpacity style={styles.emojiButton} onPress={() => handleEmojiPress('😊')}>
        <Text>😊</Text>
      </TouchableOpacity>
    )}
    <TextInput
      style={styles.input}
      placeholder="Type a message"
      multiline
      value={message}
      onChangeText={setMessage}
    />
    {isTyping ? (
      <TouchableOpacity style={styles.sendButton} onPress={handleMessageSend}>
        <Ionicons name="send" size={24} color="white" />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.disabledSendButton} disabled>
        <Ionicons name="mic" size={24} color="gray" />
      </TouchableOpacity>
    )}
  </View>
</View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 120,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  emojiButton: {
    marginRight: 10,
  },
  recordingButton: {
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  disabledSendButton: {
    backgroundColor: '#ccc',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
  },
  messageContainer: {
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 10,
    maxWidth: '60%',
  },
});
