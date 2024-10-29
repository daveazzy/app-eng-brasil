import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREY_INACTIVE};
`;

export const ProfileContainer = styled.View`
    flex: 0.25;
    align-items: center;
    padding: 16px 16px 0 16px;
    flex-direction: row;
  `

export const Photo = styled.Image.attrs(()=> ({
    resizeMode: 'cover'
}))`
    width: 100%;
    height: 100%;
    border-radius: 60px;
`
export const Info = styled.View`
  flex: 1;
  margin: 0 10px 0 10px;
  height: 40%;
`
  export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  `
  export const Academic = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.BLUE};
  `
  export const QRCodeContainer = styled.TouchableOpacity`
    justify-content: flex-end;
    margin-right: 16px;
  `
export const Body = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`
export const TitleSession = styled.Text`
  color: ${({ theme }) => theme.COLORS.GREY_ACTIVE};
  font-family: ${({ theme })=> theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const TopButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GREY_INACTIVE};
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GREY_10};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`
export const MiddleButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GREY_INACTIVE};
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GREY_10};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`
export const BottomButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GREY_INACTIVE};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.COLORS.GREY_10};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`
export const LogoutButton = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GREY_INACTIVE};
    border-radius: 12px;

    border-color: ${({ theme }) => theme.COLORS.BLUE_INACTIVE};
    flex-direction: row;
    align-items: center;
    padding: 0 16px;
    gap: 8px;
`

export const ButtonsText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE};
  font-family: ${({ theme })=> theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
`

export const ButtonContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

//icons

// import {Gear, CaretRight, PencilSimple, Lock, SignOut} from 'phosphor-react-native'

// export const Arrow = styled.View`
//   flex: 1;
//   align-items: flex-end;
// `
// export const IconArrow = styled(CaretRight).attrs(({ theme }) => ({
//   size: 32,
//   color: theme.COLORS.BLUE
// }))`
// `;

// export const IconConfig = styled(Gear).attrs(({ theme }) => ({
//   size: 32,
//   color: theme.COLORS.BLUE
// }))`
// `

// export const Pencil = styled(PencilSimple).attrs(({ theme }) => ({
//   size: 32,
//   color: theme.COLORS.BLUE
// }))`
// `

// export const IconLock = styled(Lock).attrs(({ theme }) => ({
//   size: 32,
//   color: theme.COLORS.BLUE
// }))`
// `
// export const Logout = styled(SignOut).attrs(({ theme }) => ({
//   size: 32,
//   color: theme.COLORS.BLUE
// }))`
// `;