import { ReactNode } from "react";
import { TextInputProps } from "react-native";
import { Container, ErrorMessageText, InputBG, RightIconContainer } from "./styles";

type Props = TextInputProps & {
  errorMessage?: string | null;
  rightIcon?: ReactNode;
};

export function Input({ errorMessage = null, rightIcon = null, ...rest }: Props) {
  const isInvalid = !!errorMessage;

  return (
    <InputBG>
      <Container
        {...rest}
      />
      {rightIcon && (
        <RightIconContainer>
          {rightIcon}
        </RightIconContainer>
      )}
      {errorMessage && <ErrorMessageText>{errorMessage}</ErrorMessageText>}
    </InputBG>
  );
}
