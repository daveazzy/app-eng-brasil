import { TextInputProps } from "react-native";

import { Container, ErrorMessageText, InputBG } from "./styles";

type Props = TextInputProps & {
    errorMessage?: string | null
}

export function Input({errorMessage = null,...rest}: Props){
    const isInvalid = !!errorMessage
    return(
        <InputBG>
            <Container
            {...rest}
            />
            {errorMessage && <ErrorMessageText>{errorMessage}</ErrorMessageText>}
        </InputBG>
    )
}