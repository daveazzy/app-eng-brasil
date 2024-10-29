import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    height: 102px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    padding: 16px;
`;

export const BackButton = styled.TouchableOpacity`
    flex: 0.5;
`;

export const Title = styled.Text`
    text-align: center; 
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
`;
