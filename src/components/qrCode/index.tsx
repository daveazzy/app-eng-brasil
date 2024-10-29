import React from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { ModalContainer, QRCodeWrapper, CloseButton } from './styles';

interface QRCodeModalProps {
  isVisible: boolean;
  onClose: () => void;
  qrCodeToken: string;
}

export function QRCodeModal({ isVisible, onClose, qrCodeToken }: QRCodeModalProps) {
  return (
    <Modal
      visible={isVisible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalContainer>
        <QRCodeWrapper>
          <QRCode 
            value={qrCodeToken} 
            size={200}
            color="#0961C9"
          />
          <TouchableOpacity onPress={onClose}>
            <CloseButton>Fechar</CloseButton>
          </TouchableOpacity>
        </QRCodeWrapper>
      </ModalContainer>
    </Modal>
  );
}
