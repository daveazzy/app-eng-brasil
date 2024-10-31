import React, {useState} from "react";
import { Container, EditPhoto, Forms, Photo, PhotoContainer, PhotoText, Title } from "./styles";
import { Header } from "../../components/header";
import { StatusBar, TouchableOpacity, View } from "react-native";
import { Input } from "../../components/inputs/inputs";
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from "../../hooks/UseAuth";
import { api } from "../../services/api";
import Toast from 'react-native-toast-message'; 
import * as ImagePicker from 'expo-image-picker';
import { Button } from "../../components/btn/btn";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";



export function EditProfile(){
    const { user, signOut, updateUserProfile } = useAuth();
    const [userPhoto, setUserPhoto] = useState<string | undefined>(user.photoUri);

    const navigation = useNavigation<AppNavigatorRoutesProps>()

    function handleGoBack(){
        navigation.goBack()
    }

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

    return(
        <Container>
            <StatusBar 
                backgroundColor="transparent" 
                translucent 
                barStyle={"light-content"}
            />
            <Header
                title="Editar perfil"
            />
            <Forms
                showsVerticalScrollIndicator= {false}
            >
            <PhotoContainer>
            <TouchableOpacity
          style={{ backgroundColor: 'black', borderRadius: 100,width: 142, height: 142,justifyContent: 'center', alignItems: 'center' }} 
          >
          {userPhoto ? (
            <Photo source={{ uri: userPhoto }} /> 
          ) : (
            <View style={{ 
              width: 142, 
              height: 142, 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: 100, 
              backgroundColor: '#e0e0e0' 
            }}>
              <FontAwesome name="user" size={64} color="#0961C9" /> 
            </View>
          )}
        </TouchableOpacity>
        <EditPhoto
            onPress={handleUserPhotoSelect}
        >
            <PhotoText>Alterar foto</PhotoText>
        </EditPhoto>
            </PhotoContainer>

                <Title style={{ marginTop: 24 }}>Nome</Title>
                <Input
                    placeholder= {user.name}
                />
                <Title style={{ marginTop: 24 }}>CPF</Title>
                <Input
                    placeholder= {user.cpf}
                />
                <Title style={{ marginTop: 24 }}>Formação acadêmica</Title>
                <Input
                    placeholder= {user.academicBackground}
                />
                <Title style={{ marginTop: 24 }}>Instituição</Title>
                <Input
                    placeholder= {user.institution}
                />
                <Title style={{ marginTop: 24 }}>Estado</Title>
                <Input
                    placeholder= {user.state}
                />

                <Button
                    title="Salvar alterações"
                    style={{
                        marginTop: 48,
                    }}
                />
                <Button
                    title="Cancelar"
                    type="SECONDARY"
                    style={{
                        marginTop: 16,
                        marginBottom: 24
                    }}
                    onPress={handleGoBack}
                />

            </Forms>
        </Container>
    )
}