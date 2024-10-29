import React from "react";
import { Container, Title, BackButton } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
}

export function Header({ title }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <BackButton onPress={handleGoBack}>
                <Feather name="chevron-left" size={32} color="white" />
            </BackButton>
            <Title>{title}</Title>
        </Container>
    );
}
