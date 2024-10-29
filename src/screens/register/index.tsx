import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, ScrollView, Platform, Alert } from "react-native";
import { ButtonsBox, Container, Forms, Title } from "./styles";
import { Input } from "../../components/inputs/inputs";
import { Button } from "../../components/btn/btn";
import { Header } from "../../components/header";
import { api } from "../../services/api"; 
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import Toast from 'react-native-toast-message';

export function Register() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleGoBack() {
    navigation.goBack();
  }

  async function handleSignUp() {
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    try {
      const response = await api.post("/participants", {
        name,
        email,
        password
      });

      Toast.show({
        type: "success",
        text1: "Sucesso!",
        text2:"Usuário cadastrado com sucesso!",
        position: "bottom"
      });
      navigation.navigate("signIn");

    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Falha ao registrar. Tente novamente.");
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <Container>
          <Header title="Cadastro" />
          <Forms>
            <Title style={{ marginTop: 24 }}>Nome</Title>
            <Input
              placeholder="Seu nome"
              value={name}
              onChangeText={setName}
              style={{ marginBottom: 24, marginHorizontal: 16 }}
            />
            <Title>Email</Title>
            <Input
              placeholder="example@example.com"
              value={email}
              onChangeText={setEmail}
              style={{ marginBottom: 24, marginHorizontal: 16 }}
            />
            <Title>Senha</Title>
            <Input
              placeholder="********"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={{ marginBottom: 24, marginHorizontal: 16 }}
            />
            <Title>Repetir senha</Title>
            <Input
              placeholder="********"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={{ marginBottom: 24, marginHorizontal: 16 }}
            />
          </Forms>
          <ButtonsBox>
            <Button
              title="Finalizar cadastro"
              style={{ marginBottom: 16, marginHorizontal: 16 }}
              onPress={handleSignUp}
            />
            <Button
              title="Voltar"
              type="SECONDARY"
              style={{ marginBottom: 32, marginHorizontal: 16 }}
              onPress={handleGoBack}
            />
          </ButtonsBox>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
