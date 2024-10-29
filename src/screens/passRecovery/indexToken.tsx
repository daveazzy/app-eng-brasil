import React from "react";
import { ButtonBox, Container, Info, Title } from "./styles";
import { Header } from "../../components/header";
import { StatusBar } from "expo-status-bar";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";

export function PassRecoveryToken(){

    return(
        <Container>
            <StatusBar backgroundColor="transparent" translucent style="light"/>
            <Header title='Recuperar senha'/>

            <Info>Token enviado para seu e-mail.{'\n'}
            Caso não esteja na caixa de entrada, verifique sua caixa de spam.</Info>

            <Title>Token</Title>
            <Input
                placeholder="000000"
                keyboardType="number-pad"
                style={{ marginHorizontal: 16, marginTop: 12}}
            />

            <ButtonBox>
                <Button
                    title="Validar token"
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