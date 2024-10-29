import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";

export const Container = styled(SafeAreaView)`
    background-color: ${({theme}) => theme.COLORS.WHITE};
    flex: 1;
`;

export const Container_img = styled.View`
    align-items: center;
    justify-content: center;
    padding-top: 108px;
    padding-bottom: 96px;
`;

export const Logo_eng_brasil = styled.Image`
    width: 300px;
    height: 100px;
`
export const Input_Title = styled.Text`
    margin-bottom: 12px;
    color: black;
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`
export const PassRecoveryBox = styled.View`
    justify-content: flex-end;
    flex-direction: row;
`
export const PassRecoveryText = styled.Text`
    color: ${({ theme })=> theme.COLORS.BLUE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`
export const Forms = styled.View`
    flex: 1;
    padding: 0 16px;
    justify-content: space-between;
    padding-bottom: 8px ;
`
export const InputBox = styled.View`
`
export const ButtonBox = styled.View`
`;

export const BackgroundImg = styled(ImageBackground)`
    flex-grow: 1;
    justify-content: center;
    opacity: 0.8;
`
