import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Body, Card, DateTime, Header, HeaderText, Info, SessionTitle, SpeakerImage, SpeakerName, Title,  Location} from './styles';
import { useFavorites } from '../../contexts/favoritesContext';


interface Session {
  title: string;
  date: string;
  startTime: string;
  endTime: string;
}

interface Speaker {
  id: number;
  name: string;
  title: string;
  local: string;
  instituition: string;
  photoUri?: any; 
  sessions: Session[];
}

interface SpeakerCardProps {
  speaker: Speaker;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker }) => {
  const session = speaker.sessions[0];
  
  const { favorites, toggleFavorite} = useFavorites();
  const isFavorite = favorites.some(fav => fav.id === speaker.id);



  return (
    <Card>
      <Header>
        <HeaderText>
          <Title>{speaker.title.toUpperCase()}</Title>
          <DateTime>{`${session.date} | ${session.startTime}`}</DateTime>
        </HeaderText>
        <FontAwesome 
        name= {isFavorite ? 'heart' : 'heart-o'}
        size={20} 
        color= {isFavorite ? '#F75A68' : '#70727F'}
        style={{marginRight: 16}}
        onPress={() => toggleFavorite(speaker)}
        />
      </Header>
      <Body>
        <SpeakerImage source={speaker.photoUri} />
        <Info>
          <SessionTitle numberOfLines={2}>{session.title}</SessionTitle>
          <SpeakerName>{speaker.name}</SpeakerName>
          <Location>{speaker.local}</Location>
        </Info>
      </Body>
    </Card>
  );
};

export default SpeakerCard;
