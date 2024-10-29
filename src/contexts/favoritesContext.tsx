import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Speaker } from '../@event/event';

interface FavoritesContextProps {
    favorites: Speaker[];
    toggleFavorite: (speaker: Speaker) => void;
}

const FavoritesContext = createContext<FavoritesContextProps | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [favorites, setFavorites] = useState<Speaker[]>([]);

    const toggleFavorite = (speaker: Speaker) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(fav => fav.id === speaker.id)) {
                return prevFavorites.filter(fav => fav.id !== speaker.id);
            } else {
                return [...prevFavorites, speaker];
            }
        });
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = (): FavoritesContextProps => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};
