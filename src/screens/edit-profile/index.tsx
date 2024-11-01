import React, { useState, useEffect } from "react";
import { Container, EditPhoto, Forms, Photo, PhotoContainer, PhotoText, Title } from "./styles";
import { Header } from "../../components/header";
import { StatusBar, TouchableOpacity, View, Text } from "react-native";
import { Input } from "../../components/inputs/inputs";
import { FontAwesome } from '@expo/vector-icons';
import { useAuth } from "../../hooks/UseAuth";
import { api } from "../../services/api";
import Toast from 'react-native-toast-message';
import * as ImagePicker from 'expo-image-picker';
import { Button } from "../../components/btn/btn";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { sanitizeFileName } from "../../@data-treatments/sanitizeFileName";
import { UserDTO } from "../../dtos/UserDTO";
import { storageUserSave } from "../../storage/storageUser";

export function EditProfile() {
    const { user, updateUserProfile, signOut } = useAuth();
    const [userPhoto, setUserPhoto] = useState<string | undefined>(user.photoUri);
    const [photoFile, setPhotoFile] = useState<any>(null);
    const [name, setName] = useState(user.name || ""); 
    const [cpf, setCpf] = useState(user.cpf || ""); 
    const [academicBackground, setAcademicBackground] = useState(user.academicBackground || ""); 
    const [institution, setInstitution] = useState(user.institution || ""); 
    const [state, setState] = useState(user.state || ""); 
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<AppNavigatorRoutesProps>();

    useEffect(() => {
        fetchUserProfile(); 
    }, []);

    async function fetchUserProfile() {
        try {
            const response = await api.get('/me');
            if (response.data) {
                const userData: UserDTO = response.data;
                setUserPhoto(userData.photoUri);
                setName(userData.name || ""); 
                setCpf(userData.cpf || ""); 
                setAcademicBackground(userData.academicBackground || ""); 
                setInstitution(userData.institution || ""); 
                setState(userData.state || ""); 
                await storageUserSave(userData || "");
            }
        } catch (error) {
            const customError = error as CustomError; 
            console.error("Erro ao buscar dados do perfil:", customError.message);
            
            if (customError.response?.status === 401) {
                await signOut();
            }
        } finally {
            setIsLoading(false); 
        }
    }

    function handleGoBack() {
        navigation.navigate("profile"); 
    }

    async function handleUserPhotoSelect() {
        const photoSelected = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
            allowsEditing: true,
        });

        if (photoSelected.canceled) {
            return; 
        }

        const fileUri = photoSelected.assets[0].uri;
        const fileExtension = fileUri.split('.').pop();
        const fileName = sanitizeFileName(`${user.name}.${fileExtension}`);
        const newPhotoFile = {
            uri: fileUri,
            name: fileName,
            type: `image/${fileExtension}`,
        };

        setUserPhoto(fileUri); 
        setPhotoFile(newPhotoFile); 
    }

    async function handleEditProfile() {
        const userProfileForm = new FormData();

        if (name && name !== user.name) userProfileForm.append('name', name);
        if (cpf && cpf !== user.cpf) userProfileForm.append('cpf', cpf);
        if (academicBackground && academicBackground !== user.academicBackground) 
            userProfileForm.append('academicBackground', academicBackground);
        if (institution && institution !== user.institution) 
            userProfileForm.append('institution', institution);
        if (state && state !== user.state) userProfileForm.append('state', state);

        if (photoFile) {
            userProfileForm.append('photoUri', photoFile); 
        }

        try {
            const response = await api.patch("/updateParticipantProfile", userProfileForm, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const updatedPhotoUri = response.data.photoUri || user.photoUri;
            setUserPhoto(updatedPhotoUri); 

            updateUserProfile({
                ...user,
                name,
                cpf,
                academicBackground,
                institution,
                state,
                photoUri: updatedPhotoUri,
            });

            Toast.show({
                type: 'success',
                text1: 'Success',
                text2: 'Profile updated successfully',
                position: 'top',
            });
            navigation.goBack(); 
        } catch (error) {
            console.error("Error updating profile:", error);
            Toast.show({
                type: 'error',
                text1: 'Failed to update profile',
                position: 'top',
            });
        }
    }

    if (isLoading) {
        return <LoadingIndicator />;
    }

    return (
        <Container>
            <StatusBar backgroundColor="transparent" translucent barStyle={"light-content"} />
            <Header title="Edit Profile" onBackPress={handleGoBack}/>
            <Forms showsVerticalScrollIndicator={false}>
                <PhotoContainer>
                    <TouchableOpacity onPress={handleUserPhotoSelect} style={{ backgroundColor: 'black', borderRadius: 100, width: 142, height: 142, justifyContent: 'center', alignItems: 'center' }}>
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
                    <EditPhoto onPress={handleUserPhotoSelect}>
                        <PhotoText>Change Photo</PhotoText>
                    </EditPhoto>
                </PhotoContainer>

                <Title style={{ marginTop: 24 }}>Name</Title>
                <Input value={name} onChangeText={setName} placeholder="Enter your name" />

                <Title style={{ marginTop: 24 }}>CPF</Title>
                <Input value={cpf} onChangeText={setCpf} placeholder="Enter your CPF" />

                <Title style={{ marginTop: 24 }}>Academic Background</Title>
                <Input value={academicBackground} onChangeText={setAcademicBackground} placeholder="Enter your academic background" />

                <Title style={{ marginTop: 24 }}>Institution</Title>
                <Input value={institution} onChangeText={setInstitution} placeholder="Enter your institution" />

                <Title style={{ marginTop: 24 }}>State</Title>
                <Input value={state} onChangeText={setState} placeholder="Enter your state" />

                <Button title="Salvar alterações" style={{ marginTop: 48 }} onPress={handleEditProfile} />
                <Button title="Cancelar" type="SECONDARY" style={{ marginTop: 16, marginBottom: 24 }} onPress={handleGoBack} />
            </Forms>
        </Container>
    );
}

const LoadingIndicator = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
    </View>
);
