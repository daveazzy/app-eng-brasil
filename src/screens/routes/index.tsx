import {NavigationContainer} from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { useAuth } from '../../hooks/UseAuth';
import { ActivityIndicator } from 'react-native';

export function Routes(){
    const {user, isLoadingUserStorageData}= useAuth();

    if(isLoadingUserStorageData){
        return <ActivityIndicator/>
    }
    return (
        <NavigationContainer>
            {user.id? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}
