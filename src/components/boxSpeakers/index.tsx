import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Body, Card, DateTime, Header, HeaderText, Info, SessionTitle, SpeakerImage, SpeakerName, Title, Location } from './styles';
import { useFavorites } from '../../contexts/favoritesContext';
import { format } from 'date-fns';
import { TouchableOpacity } from 'react-native'; 

interface Speaker {
  id: number;
  name: string;
  institution: string;
  photoUri: string;
  presentationTitle: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  congressId: string;
  administratorId: string;
  categoryId: string;
  categoryName?: string;
}

interface SpeakerCardProps {
  speaker: Speaker;
  onPress: () => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, onPress }) => {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === speaker.id);

  const formattedDate = format(new Date(speaker.date), 'dd/MM');

  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Header>
          <HeaderText>
            <Title>{speaker.categoryName}</Title>
            <DateTime>{`${formattedDate} | ${speaker.startTime}`}</DateTime>
          </HeaderText>
          <FontAwesome 
            name={isFavorite ? 'heart' : 'heart-o'}
            size={20}
            color={isFavorite ? '#F75A68' : '#70727F'}
            style={{ marginRight: 16 }}
            onPress={() => toggleFavorite(speaker)}
          />
        </Header>
        <Body>
          <SpeakerImage source={{ uri: speaker.photoUri }} />
          <Info>
            <SessionTitle numberOfLines={2}>{speaker.presentationTitle}</SessionTitle>
            <SpeakerName>{speaker.name}</SpeakerName>
            <Location>{speaker.location}</Location>
          </Info>
        </Body>
      </Card>
    </TouchableOpacity>
  );
};

export default SpeakerCard;
