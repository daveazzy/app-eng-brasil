import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme})=> theme.COLORS.WHITE};
`

export const Buttons = styled.View`
    flex: 1;
    padding: 16px;
`
export const DeleteButton = styled.TouchableOpacity`
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