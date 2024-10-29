import styled from 'styled-components/native';

export const CarouselContainer = styled.View`
  flex: 1;
  margin: 32px 0;
  `;

export const CarouselItem = styled.View`
    min-height: 32px;
    max-height: 32px;

    background-color: grey;
    padding: 0 10px;

    justify-content: center;

    border-radius: 8px;
`;
export const Title = styled.Text`
    font-family: ${({ theme })=> theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme })=> theme.FONT_SIZE.MD}px;
`