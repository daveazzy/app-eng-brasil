import React from "react";
import { ButtonBox, Container, Info, Title } from "./styles";
import { Header } from "../../components/header";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";

export function PassRecovery(){

    return(
        <Container>
            <StatusBar backgroundColor="transparent" translucent style="light"/>
            <Header title='Recuperar senha'/>

            <Info>Enviaremos um token de recuperação para o e-mail cadastrado para que possa alterar sua senha. Por favor, insira seu e-mail.</Info>

            <Title>Email</Title>
            <Input
                placeholder="example@example.com"
                autoCapitalize="none"
                style={{ marginHorizontal: 16, marginTop: 12}}
            />

            <ButtonBox>
                <Button
                    title="Enviar token"
                    style={{marginHorizontal: 16, marginBottom: 16}}
                />
                <Button
                    title="Voltar"
                    type="SECONDARY"
                    style={{marginHorizontal: 16, marginBottom: 32}}
                />
            </ButtonBox>
        </Container>
    )
}