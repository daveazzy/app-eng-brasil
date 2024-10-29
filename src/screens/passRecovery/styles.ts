import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
export const Info = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREY_INFO};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin: 24px 16px 32px 16px;
`;
export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GREY_INFO};
    font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    margin: 0 16px;
`;
export const ButtonBox = styled.View`
    flex: 1;
    justify-content: flex-end;
`

