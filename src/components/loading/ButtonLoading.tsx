import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

interface CustomLoadingIndicatorProps {
    size?: 'small' | 'large';
    color?: string;
}

const CustomLoadingIndicator: React.FC<CustomLoadingIndicatorProps> = ({ size = 'large', color = '#FFF' }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    },
});

export default CustomLoadingIndicator;
