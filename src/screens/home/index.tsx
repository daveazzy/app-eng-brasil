import React, { useState, useEffect, useCallback } from "react";
import { Body, Container, GreyBar, Header, Palestra } from "./styles";
import { SearchBar } from "../../components/searchBar";
import { Carousel } from "../../components/homeCarousel";
import SpeakerCard from "../../components/boxSpeakers";
import { StatusBar, View } from "react-native";
import { api } from "../../services/api";
import SpeakerModal from "../../components/speakerModal";
import { getUniqueTitle } from "../../utils/getUniqueTitles";
import LoadingIndicator from "../../components/loading";

export interface Speaker {
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

function regexText(text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function getUniqueCategories(speakers: Speaker[]): string[] {
    const categories = speakers.map(speaker => speaker.categoryName || "Sem Categoria").filter(Boolean);
    return ["Todos", ...new Set(categories)];
}

export function Home() {
    const [speakers, setSpeakers] = useState<Speaker[]>([]);
    const [searchText, setSearchText] = useState<string>('');
    const [filteredSpeakers, setFilteredSpeakers] = useState<Speaker[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchSpeakers = async () => {
            try {
                setIsLoading(true);
                const response = await api.get('/speakers/b213202f-bb2d-4b7a-bd6d-e7459694eba0');
                const data = await response.data;
                setSpeakers(data);
                setFilteredSpeakers(data);
            } catch (error) {
                console.error("Erro ao buscar palestrantes:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSpeakers();
    }, []);

    const carouselData = getUniqueCategories(speakers).map((category, index) => ({
        id: (index + 1).toString(),
        title: category
    }));

    const filterSpeakers = useCallback(() => {
        let filtered = speakers;

        if (selectedCategory !== 'Todos') {
            filtered = filtered.filter(speaker => speaker.categoryName === selectedCategory);
        }

        if (searchText !== '') {
            const regexSearchText = regexText(searchText);
            filtered = filtered.filter(speaker =>
                regexText(speaker.presentationTitle).includes(regexSearchText) ||
                regexText(speaker.name).includes(regexSearchText)
            );
        }

        filtered.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date); 
            if (dateA.getTime() === dateB.getTime()) {
                const timeA = new Date(`1970-01-01T${a.startTime}`);
                const timeB = new Date(`1970-01-01T${b.startTime}`);
                return timeA.getTime() - timeB.getTime();
            }
            return dateA.getTime() - dateB.getTime();
        });

        setFilteredSpeakers(filtered);
    }, [speakers, searchText, selectedCategory]);

    useEffect(() => {
        filterSpeakers();
    }, [filterSpeakers]);

    const handleCarouselPress = useCallback((item: { id: string; title: string }) => {
        setSelectedCategory(item.title);
    }, []);

    const handleCardPress = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
        setModalVisible(true);
    };

    return (
        <Container>
            <StatusBar 
                backgroundColor="transparent" 
                translucent 
                barStyle={"dark-content"}
            />
            {isLoading ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <LoadingIndicator />
                </View>
            ) : (
                <>
                    <Header>
                        <SearchBar
                            value={searchText}
                            onChangeText={setSearchText}
                            style={{ margin: 16 }}
                        />
                        <GreyBar />
                    </Header>
                    <Body showsVerticalScrollIndicator={false}>
                        <Carousel data={carouselData} onItemPress={handleCarouselPress} selectedCategory={selectedCategory} />
                        <Palestra>PALESTRAS</Palestra>
                        {filteredSpeakers.map(speaker => (
                            <SpeakerCard 
                                key={speaker.id} 
                                speaker={speaker} 
                                onPress={() => handleCardPress(speaker)}
                            />
                        ))}
                    </Body>
                    <SpeakerModal 
                        visible={modalVisible} 
                        onClose={() => setModalVisible(false)} 
                        speaker={selectedSpeaker} 
                    />
                </>
            )}
        </Container>
    );
}
