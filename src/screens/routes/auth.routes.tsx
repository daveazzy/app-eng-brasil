import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Register } from "../register";
import { SignIn } from "../signIn";
import { PassRecovery } from "../passRecovery/index";

type AuthRoutes = {
    register: undefined;
    signIn: undefined;
    passRecovery: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name='signIn'
                component={SignIn}
            />
            <Screen
                name='register'
                component={Register}
            />
            <Screen
                name='passRecovery'
                component={PassRecovery}
            />
        </Navigator>
    )
} 