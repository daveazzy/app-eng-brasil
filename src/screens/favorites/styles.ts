import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Header = styled.View`
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const GreyBar = styled.View`
    height: 1px;

    margin: 0 16px;

    background-color: ${({ theme }) => theme.COLORS.GREY_10};
`
export const Body = styled.ScrollView`
    flex: 1;
`
export const Palestra = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.BLUE_04};
    margin: 0 16px 16px 16px;
`