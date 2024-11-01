import { StatusBar } from "react-native";
import { ButtonContent, Buttons, ButtonsText, Container, DeleteButton } from "./styles";
import { Header } from "../../components/header";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome, Feather } from '@expo/vector-icons';
import axios from "axios";
import Toast from 'react-native-toast-message';
import { useAuth } from "../../hooks/UseAuth";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";

export function Configurations() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    const { user } = useAuth(); 
    const nav = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.navigate("profile");
    }

    const handleDeleteAccount = async () => {
        try {
            const response = await axios.delete(`/participants/delete/${user.id}`);

            if (response.status === 204) {
                Toast.show({
                    text1: "Conta excluída com sucesso!",
                    type: "success",
                });
                nav.navigate("signIn");
            }
        } catch (error) {
            console.log(error)
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    Toast.show({
                        text1: "Erro",
                        text2: error.response.data.message || "Ocorreu um erro ao excluir a conta.",
                        type: "error",
                    });
                } else if (error.request) {

                    Toast.show({
                        text1: "Erro",
                        text2: "Nenhuma resposta recebida do servidor.",
                        type: "error",
                    });
                } else {
                    Toast.show({
                        text1: "Erro",
                        text2: error.message || "Ocorreu um erro ao se conectar ao servidor.",
                        type: "error",
                    });
                }
            } else {
                Toast.show({
                    text1: "Erro",
                    text2: "Ocorreu um erro desconhecido.",
                    type: "error",
                });
            }
        }
    };
    
    return (
        <Container>
            <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
            <Header title="Edit Profile" onBackPress={handleGoBack} />

            <Buttons>
                <DeleteButton onPress={handleDeleteAccount}>
                    <ButtonContent>
                        <FontAwesome name="trash" size={20} color="#0961C9" style={{ marginRight: 10 }} />
                        <ButtonsText>Excluir conta</ButtonsText>
                        <Feather name="chevron-right" size={20} color="#0961C9" style={{ marginLeft: 'auto' }} />
                    </ButtonContent>
                </DeleteButton>
            </Buttons>
        </Container>
    );
}
