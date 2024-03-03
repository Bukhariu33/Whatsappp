import { ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import PersonalChats from '../components/PersonalChats';
import { MaterialIcons } from '@expo/vector-icons';

export default function Chats({ navigation }) {
  const chatsData = [
    { id: 1, profileImg: require('../profileimages/andrew.jpg'), Name: 'Andrew Tate', Last: 'Hello dear how are you', Time: '1:00PM' },
    { id: 2, profileImg: require('../profileimages/cloe.jpg'), Name: 'Cloe Vecle', Last: 'How was the meeting last sunday', Time: '10:00PM' },
    { id: 3, profileImg: require('../profileimages/engin.jpg'), Name: 'Engin Aykurt', Last: 'I felt so bad when house got filled in the cinema', Time: '10:00PM' },
    { id: 4, profileImg: require('../profileimages/rio.jpg'), Name: 'Rio', Last: 'Hello dear, its Rio from the silicon valley', Time: '9:00PM' },
    { id: 5, profileImg: require('../profileimages/female.jpg'), Name: 'Diana Dee', Last: 'Hello I M Diana, How R you', Time: '9:00PM' },
    { id: 6, profileImg: require('../profileimages/andrew.jpg'), Name: 'Moutain Dew', Last: 'Hello dear how are you', Time: '1:00PM' },
    { id: 7, profileImg: require('../profileimages/rio.jpg'), Name: 'Rio', Last: 'Hello dear, its Rio from the silicon valley', Time: '9:00PM' },
    { id: 8, profileImg: require('../profileimages/rio.jpg'), Name: 'Rio', Last: 'Hello dear, its Rio from the silicon valley', Time: '9:00PM' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {chatsData.map(chat => (
          <PersonalChats
            key={chat.id}
            profileImg={chat.profileImg}
            Name={chat.Name}
            Last={chat.Last}
            Time={chat.Time}
            onPress={() => navigation.navigate('chatScreen')}
          />
        ))}
      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  chatContainer: {
    flex: 1,
  },
});
