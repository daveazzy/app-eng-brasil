import React, { useEffect, useRef } from 'react';
import { View, Animated, Easing } from 'react-native';
import logo_engbrasil from '../../assets/logo_engbrasil.png';

const LoadingIndicator = () => {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const animate = () => {
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 300,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ]).start(() => animate());
        };

        animate();
    }, [opacity]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Animated.Image
                source={logo_engbrasil}
                style={{ width: 200, height: 200, opacity }}
                resizeMode="contain"
            />
        </View>
    );
};

export default LoadingIndicator;
