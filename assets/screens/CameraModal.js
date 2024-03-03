import React, {useRef } from 'react';
import { Modal, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Camera } from 'expo-camera';
import Icons from '../components/Icons';// Assuming Icons component is correctly imported
import * as ImagePicker from 'expo-image-picker';

export default function CameraModal({modalVisible, setModalVisible, setImageUri, setUserMessages, SetGalleryImage}) {
    const cameraRef = useRef()
  
    const pickImageFromGallery = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        SetGalleryImage(result.assets[0].uri);
        setUserMessages(prevMessages => [
          ...prevMessages,
          { type: 'image', galleryImage: result.assets[0].uri, position: 'right' }, // Add galleryImage property
        ]);
      }
    };

    const PicImage = async () => {
      if (!cameraRef.current) return;
  
      try {
        const { uri } = await cameraRef.current.takePictureAsync();
        setImageUri(uri);
        setUserMessages(prevMessages => [...prevMessages, { type: 'image', uri: uri }]);
        setModalVisible(false);

      } catch (error) {
        console.error('Error taking picture:', error);
      }
    };
 
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={setModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Camera ref={cameraRef} style={{ flex: 1 }}>
              {/* Camera content goes here */}
              <View style={styles.iconsContainer}>
                <Icons onPress={PicImage} pickImage={pickImageFromGallery} />
              </View>
            </Camera>

            {/* Bottom bar for additional functionality */}
            <View style={styles.bottomBar}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Video</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, { marginLeft: 10 }]}>
                <Text style={styles.buttonText}>Photo</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    width: '100%',
  },
  iconsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  bottomBar: {
    flex:0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'black', // Semi-transparent background
  },
  button: {
    backgroundColor: '#383535',
    padding: 5,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  openModalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  openModalButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
