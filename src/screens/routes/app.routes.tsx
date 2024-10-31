import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components/native';
import { Home } from '../home';
import { Favorites } from '../favorites';
import { Profile } from '../profile';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { EditProfile } from '../edit-profile';

type AppRoutes = {
    home: undefined;
    favorites: undefined;
    profile: undefined;
    editProfile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    const { COLORS } = useTheme();

    return (
        <Navigator
            initialRouteName='home'
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: true,
                tabBarActiveTintColor: COLORS.BLUE,
                tabBarInactiveTintColor: COLORS.GREY_TB,
                tabBarStyle: {
                    height: Platform.OS === 'android' ? 80 : 96,
                    paddingBottom: 16,
                    paddingTop: 12
                }
            }}
        >

            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" size={32} color={color} /> 
                    ),
                    tabBarLabel: 'Início'
                }}
            />
            <Screen
                name='favorites'
                component={Favorites}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="favorite" size={32} color={color} /> 
                    ),
                    tabBarLabel: 'Favoritos'
                }}
            />
            <Screen
                name='profile'
                component={Profile}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="person" size={32} color={color} /> 
                    ),
                    tabBarLabel: 'Perfil'
                }}
            />
            <Screen
                name='editProfile'
                component={EditProfile}
                options={{ tabBarButton: () => null}}
            />

        </Navigator>
    );
}
