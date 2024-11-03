import React from "react";
import { TouchableOpacityProps, ActivityIndicator } from "react-native";
import { Container, Title, ButtonTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    isLoading?: boolean;
};

export function Button({ title, type = 'PRIMARY', isLoading = false, ...rest }: Props) {
    return (
        <Container type={type} disabled={isLoading} {...rest}>
            {isLoading ? (
                <ActivityIndicator size="small" color="#FFF" />
            ) : (
                <Title type={type}>{title}</Title>
            )}
        </Container>
    );
}
