import { ReactNode, createContext, useEffect, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";
import { api } from "../services/api";
import { storageUserSave, storageUserGet, storageUserRemove } from "../storage/storageUser";
import { storageAuthTokenSave, storageAuthTokenGet, storageAuthTokenRemove } from "../storage/storageAuthToken";
import { AppError } from "../utils/AppError";

export type AuthContextDataProps = {
    user: UserDTO;
    signIn: (email: string, password: string) => Promise<void>;
    signOut: () => Promise<void>;
    updateUserProfile: (updatedUser: UserDTO) => Promise<void>;
    fetchUserProfile: () => Promise<void>; 
    isLoadingUserStorageData: boolean;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextDataProps>({} as AuthContextDataProps);

export function AuthContextProvider ({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoadingUserStorageData, setIsLoadingUserStorageData] = useState(true);

    async function UserAndTokenUpdate(user: UserDTO, token: string) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setUser(user);
    }

    async function storageUserAndTokenSave(userData: UserDTO, token: string) {
        try {
            setIsLoadingUserStorageData(true);
            await storageUserSave(userData);
            await storageAuthTokenSave(token);
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function signIn(email: string, password: string) {
        try {
            const { data } = await api.post('/participantSessions', { email, password });
            if (data.participant && data.token) {
                await storageUserAndTokenSave(data.participant, data.token);
                UserAndTokenUpdate(data.participant, data.token);
            }
        } catch (error) {
            throw error;
        }
    }

    async function signOut() {
        try {
            setIsLoadingUserStorageData(true);
            setUser({} as UserDTO);
            await storageUserRemove();
            await storageAuthTokenRemove();
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    async function loadUserData() {
        try {
            setIsLoadingUserStorageData(true);
            const userLogged = await storageUserGet();
            const token = await storageAuthTokenGet();

            if (token && userLogged) {
                UserAndTokenUpdate(userLogged, token);
            }
        } catch (error) {
            throw error;
        } finally {
            setIsLoadingUserStorageData(false);
        }
    }

    interface CustomError extends Error {
        response?: {
            status?: number;
        };
    }

    async function fetchUserProfile() {
        try {
            const response = await api.get('/me');
            if (response.data) {
                const userData: UserDTO = response.data;
                setUser(userData);
                await storageUserSave(userData);
            }
        } catch (error) {
            const customError = error as CustomError; 
            console.error("Erro ao buscar dados do perfil:", customError.message);
            
            if (customError.response?.status === 401) {
                await signOut();
            }
        }
    }

    async function updateUserProfile(updatedUser: UserDTO) {
        try {
            setUser(updatedUser); 
            await storageUserSave(updatedUser); 
        } catch (error) {
            console.error("Erro ao atualizar o perfil do usuário:", error);
        }
    }

    useEffect(() => {
        loadUserData();
    }, []);

    return (
        <AuthContext.Provider value={{ 
            user, 
            signIn,
            signOut,
            updateUserProfile, 
            fetchUserProfile,
            isLoadingUserStorageData
        }}>
            {children}
        </AuthContext.Provider>
    )
}
