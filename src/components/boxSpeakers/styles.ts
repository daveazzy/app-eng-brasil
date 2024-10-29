import styled from "styled-components/native";

export const Card = styled.View`
  background-color: white;
  margin: 0 16px 16px 16px;
  padding: 16px 0;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.COLORS.GREY_10};
  background-color: ${({ theme }) => theme.COLORS.BLUE_BRIGTHEN}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 14px;
  border-bottom-width: 1px;
  border-color: ${({ theme })=> theme.COLORS.GREY_10};
`;

export const HeaderText = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  margin-right: 8px;
  align-items: center;
  margin-left: 16px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREY_05};
`;

export const DateTime = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREY_05};
  margin-left: 10px;
`;

export const Body = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
`;

export const SpeakerImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 16px;
  margin-right: 10px;
  margin-left: 16px;
`;

export const Info = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const SessionTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.BLUE_01};
  margin-bottom: 4px;
`;

export const SpeakerName = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREY_03};
  font-family: ${({ theme }) => theme.FONT_FAMILY.MEDIUM};
  margin-bottom: 2px;
`;

export const Location = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GREY_03};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;