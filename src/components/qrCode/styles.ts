// styles.js
import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const QRCodeWrapper = styled.View`
  background-color: #FFF;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const CloseButton = styled.Text`
  margin-top: 20px;
  background-color: #0961C9;
  color: #FFF;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
`;
