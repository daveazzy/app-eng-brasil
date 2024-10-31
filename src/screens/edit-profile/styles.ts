import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Forms = styled.ScrollView`
    padding: 0 16px;
`
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    margin: 0 0 12px 0;
`
export const PhotoContainer = styled.View`
    margin: 16px 0;
    justify-content: center;
    align-items: center;
`
export const Photo = styled.Image.attrs(()=> ({
    resizeMode: 'cover'
}))`
    width: 100%;
    height: 100%;
    border-radius: 100px;
`
export const EditPhoto = styled.TouchableOpacity`
    background-color: ${({theme} )=> theme.COLORS.BLUE};
    justify-content: center;
    align-items: center;

    min-width: 96px;
    max-width: 148px;

    min-height: 32px;
    max-height: 48px;

    margin-top: 16px;

    padding: 0 12px;

    border-radius: 12px;
`
export const PhotoText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme })=> theme.COLORS.WHITE}
    `

    