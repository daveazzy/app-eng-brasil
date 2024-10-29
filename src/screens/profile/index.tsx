import React, { useState, useEffect } from "react";
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';
import { 
  Academic, Body, BottomButton, ButtonsText, Container, Info, 
  LogoutButton, MiddleButton, Name, Photo, ProfileContainer, 
  QRCodeContainer, TitleSession, TopButton, ButtonContent
} from "./styles";
import { QRCodeModal } from '../../components/qrCode';
import { useAuth } from "../../hooks/UseAuth";
import { StatusBar, TouchableOpacity, View } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { api } from "../../services/api";
import Toast from 'react-native-toast-message'; 

export function Profile() {
  const { user, signOut, updateUserProfile } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userPhoto, setUserPhoto] = useState<string | undefined>(user.photoUri); 

  useEffect(() => {
    setUserPhoto(user.photoUri);
  }, [user.photoUri]);

  async function handleUserPhotoSelect() {
    const photoSelected = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      aspect: [4, 4],
      allowsEditing: true,
    });
  
    if (photoSelected.canceled) {
      return;
    }
  
    const fileUri = photoSelected.assets[0].uri;
    const fileExtension = fileUri.split('.').pop();
    const fileName = `${user.name}.${fileExtension}`.toLowerCase();
    const photoFile = {
      uri: fileUri,
      name: fileName,
      type: `image/${fileExtension}` as string,
    } as any;
  
    const userPhotoUploadForm = new FormData();
    userPhotoUploadForm.append('photoUri', photoFile); 
  
    try {
      const photoUpdatedResponse = await api.patch('/updateParticipantProfile', userPhotoUploadForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log("Photo updated response:", photoUpdatedResponse.data);
  
      const updatedPhotoUri = photoUpdatedResponse.data.photoUri || user.photoUri;
      setUserPhoto(updatedPhotoUri);
      
      updateUserProfile({ ...user, photoUri: updatedPhotoUri }); 

      Toast.show({
        type: 'success',
        text1: 'Foto atualizada com sucesso!',
      });
    } catch (error) {
      console.error("Erro ao atualizar a foto:", error);
      Toast.show({
        type: 'error',
        text1: 'Falha ao atualizar a foto!',
      });
    }
  }

  const qrCodeToken = user.qrCodeToken;
  const firstName = user.name.split(' ')[0];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Container>
      <StatusBar 
        backgroundColor="transparent" 
        translucent 
        barStyle={"dark-content"}
      />
      <ProfileContainer>
        <TouchableOpacity
          style={{ width: 96, height: 96, justifyContent: 'center', alignItems: 'center' }} 
          onPress={handleUserPhotoSelect}>
          {userPhoto ? (
            <Photo source={{ uri: userPhoto }} /> 
          ) : (
            <View style={{ 
              width: 96, 
              height: 96, 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: 48, 
              backgroundColor: '#e0e0e0' 
            }}>
              <FontAwesome name="user" size={48} color="#0961C9" /> 
            </View>
          )}
        </TouchableOpacity>
        <Info>
          <Name>{firstName}</Name>
          <Academic>{user.academicBackground || 'Congressista'}</Academic>
        </Info>
        <QRCodeContainer>
          <TouchableOpacity onPress={toggleModal}>
            <MaterialIcons name="qr-code" size={48} color="#0961C9" />
          </TouchableOpacity>
        </QRCodeContainer>
      </ProfileContainer>

      <Body>
        <TitleSession>Informações de perfil e configurações</TitleSession>

        <TopButton>
          <ButtonContent>
            <FontAwesome name="user" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Editar perfil</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </TopButton>

        <MiddleButton>
          <ButtonContent>
            <FontAwesome name="lock" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Alterar senha</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </MiddleButton>

        <BottomButton>
          <ButtonContent>
            <FontAwesome name="cog" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Outras configurações</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </BottomButton>

        <TitleSession>Sair</TitleSession>

        <LogoutButton onPress={signOut}>
          <ButtonContent>
            <FontAwesome name="sign-out" size={20} color="#0961C9" style={{ marginRight: 10 }} />
            <ButtonsText>Sair</ButtonsText>
            <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
          </ButtonContent>
        </LogoutButton>
      </Body>

      <QRCodeModal
        isVisible={isModalVisible}
        onClose={toggleModal}
        qrCodeToken={qrCodeToken}
      />
    </Container>
  );
}
