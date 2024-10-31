import styled from "styled-components/native";
import { TextInput } from "react-native";

export const InputBG = styled.View`
  justify-content: center;
  position: relative;
`;

export const Container = styled(TextInput)`
  flex: 1;
  min-height: 52px;
  max-height: 52px;
  background-color: ${({ theme }) => theme.COLORS.GREY_INACTIVE};
  color: black;
  border-width: 1px;
  border-radius: 4px;
  border-color: ${({ theme }) => theme.COLORS.GREY_BORDER};
  padding: 16px;
`;

export const RightIconContainer = styled.View`
  position: absolute;
  right: 16px;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessageText = styled.Text`
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.PP}px;
`;
