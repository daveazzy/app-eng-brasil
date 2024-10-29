import React, { useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { CarouselContainer, CarouselItem, Title } from './styles';

interface CarouselProps {
  data: Array<{ id: string; title: string }>;
  onItemPress: (item: { id: string; title: string }) => void;
}

export function Carousel({ data, onItemPress }: CarouselProps) {
    const [selectedId, setSelectedId] = useState<string>(data[0]?.id || '');

    const handlePress = (item: { id: string; title: string }) => {
        setSelectedId(item.id);
        onItemPress(item);
    }

    return (
        <CarouselContainer>
            <FlatList
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => handlePress(item)}>
                        <CarouselItem
                            style={{
                                marginLeft: index === 0 ? 16 : 12,
                                marginRight: index === data.length - 1 ? 16 : 0,
                                backgroundColor: item.id === selectedId ? '#0961C9' : '#CBEBFC'
                            }}
                        >
                            <Title
                                style={{
                                    color: item.id === selectedId ? '#FFFFFF' : '#3D3E44'
                                }}
                            >
                                {item.title}
                            </Title>
                        </CarouselItem>
                    </TouchableOpacity>
                )}
            />
        </CarouselContainer>
    );
}
