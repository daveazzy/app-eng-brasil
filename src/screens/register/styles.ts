import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`; 
export const Forms = styled.View`
    
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin: 0 16px 12px 16px;
`;
export const Terms = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    /* make it later. there is already a version on ndt project */
`;
export const ButtonsBox = styled.View`
    flex: 1;
    justify-content: flex-end;
`