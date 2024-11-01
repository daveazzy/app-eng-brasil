import React from "react";
import { Container, Title, BackButton } from "./styles";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string;
    onBackPress?: () => void;
}

export function Header({ title, onBackPress }: Props) {
    const navigation = useNavigation();

    function handleGoBack() {
        if (onBackPress) {
            onBackPress();
        } else {
            navigation.goBack();
        }
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
