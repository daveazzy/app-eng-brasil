import React, { useState } from "react";
import { StatusBar, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { Container, Logo_eng_brasil, Container_img, Input_Title, Forms, PassRecoveryBox, PassRecoveryText, InputBox, ButtonBox } from "./styles";
import logo_engbrasil from "../../assets/logo_engbrasil.png";
import { Button } from "../../components/btn/btn";
import { Input } from "../../components/inputs/inputs";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.routes";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../hooks/UseAuth";
import { AppError } from "../../utils/AppError";
import { FontAwesome } from "@expo/vector-icons"; // Importando FontAwesome do Expo

type FormDataProps = {
  email: string;
  password: string;
};

const signInSchema = yup.object({
  email: yup.string().required('* Informe o email.').email('* Email inválido.'),
  password: yup.string().required('* Informe a senha.').min(6, '* A senha deve ter pelo menos 6 dígitos.'),
});

export function SignIn() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  });
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  async function handleSignIn({ email, password }: FormDataProps) {
    try {
      setIsLoading(true);
      await signIn(email, password);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível realizar o login. Tente novamente mais tarde.";

      alert(title);
      setIsLoading(false);
    }
  }

  function handleNewAccount() {
    navigation.navigate("register");
  }

  return (
    <Container>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle={"dark-content"}
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between" }}>
          <Container_img>
            <Logo_eng_brasil source={logo_engbrasil} resizeMode="contain" />
          </Container_img>
          <Forms>
            <InputBox>
              <Input_Title>Email</Input_Title>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="example@example.com"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Input_Title
                style={{
                  marginTop: 24
                }}
              >Senha</Input_Title>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="********"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    onChangeText={onChange}
                    value={value}
                    errorMessage={errors.password?.message}
                    onSubmitEditing={handleSubmit(handleSignIn)}
                    rightIcon={
                      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <FontAwesome
                          name={showPassword ? "eye" : "eye-slash"}
                          size={20}
                          color="grey"
                        />
                      </TouchableOpacity>
                    }
                  />
                )}
              />
              <PassRecoveryBox>
                <PassRecoveryText style={{marginTop: 24}}>Recuperar senha</PassRecoveryText>
              </PassRecoveryBox>
            </InputBox>
            <ButtonBox>
              <Button title="Entrar" onPress={handleSubmit(handleSignIn)} style={{ marginBottom: 16 }} />
              <Button title="Cadastrar-se" type="SECONDARY" onPress={handleNewAccount} style={{ marginBottom: 24 }} />
            </ButtonBox>
          </Forms>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
