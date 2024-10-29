import React from "react";
import { ButtonBox, Container, Info, Title } from "./styles";
import { Header } from "../../components/header";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";

export function PassChange(){

    return(
        <Container>
            <StatusBar backgroundColor="transparent" translucent style="light"/>
            <Header title='Recuperar senha'/>

            <Info>Tudo certo! Insira a sua nova senha.</Info>

            <Title>Nova senha</Title>
            <Input
                placeholder="********"
                autoCapitalize="none"
                style={{ marginHorizontal: 16, marginTop: 12}}
            />
            <Title style={{ marginTop: 24}}>Repetir nova senha</Title>
            <Input
                placeholder="********"
                autoCapitalize="none"
                style={{ marginHorizontal: 16, marginTop: 12}}
            />

            <ButtonBox>
                <Button
                    title="Alterar senha"
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