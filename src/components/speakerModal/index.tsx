import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";

interface SpeakerModalProps {
    visible: boolean;
    onClose: () => void;
    speaker: {
        name: string;
        institution: string;
        presentationTitle: string;
        date: string;
        startTime: string;
        endTime: string;
        location: string;
        categoryName?: string;
        photoUri: string;
    } | null;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ visible, onClose, speaker }) => {
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: '2-digit' } as const;
        return date.toLocaleDateString('pt-BR', options);
    };

    const abbreviateName = (fullName: string) => {
        const nameParts = fullName.trim().split(' ');
        if (nameParts.length <= 2) {
            return fullName; 
        }
        
        const firstName = nameParts[0]; 
        const lastName = nameParts[nameParts.length - 1]; 
        const middleInitials = nameParts.slice(1, -1)
            .filter(part => /^[A-Z]/.test(part)) 
            .map(part => part.charAt(0) + '.'); 
    
        return `${firstName} ${middleInitials.join(' ')} ${lastName}`.trim(); 
    };

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <ScrollView contentContainerStyle={styles.scrollContainer}>
                        {speaker && (
                            <>
                                <Image 
                                    source={{ uri: speaker.photoUri }} 
                                    style={styles.image} 
                                />
                                <Text style={styles.title}>{speaker.presentationTitle}</Text>
                                <View style={styles.nameInstitutionContainer}>
                                    <Text style={styles.name}>{abbreviateName(speaker.name)},</Text>
                                    <Text style={styles.institution}>{speaker.institution}</Text>
                                </View>

                                <View style={styles.infoContainer}>
                                    <View style={styles.column}>
                                        <Text style={styles.label}>Categoria:</Text>
                                        <Text style={styles.value}>{speaker.categoryName || "Sem Categoria"}</Text>
                                        
                                        <Text style={styles.label}>Local:</Text>
                                        <Text style={styles.value}>{speaker.location}</Text>
                                    </View>
                                    <View style={styles.column}>
                                        <Text style={styles.label}>Data:</Text>
                                        <Text style={styles.value}>{formatDate(speaker.date)}</Text>

                                        <Text style={styles.label}>Horário:</Text>
                                        <Text style={styles.value}>{speaker.startTime}</Text>
                                    </View>
                                </View>
                            </>
                        )}
                    </ScrollView>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={onClose} 
                        accessibilityLabel="Fechar modal" 
                        accessibilityHint="Fecha o modal exibindo as informações do palestrante"
                    >
                        <Text style={styles.buttonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 16,
    },
    modalContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10, 
        padding: 16,
        elevation: 5, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.2, 
        shadowRadius: 5, 
    },
    scrollContainer: {
        flexGrow: 1, 
        justifyContent: "center", 
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 8,
        color: '#0961C9',
        textAlign: "center",
    },
    nameInstitutionContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Center-aligns the content
        alignItems: 'center', // Vertically align items
        flexWrap: 'wrap', // Allows wrapping to the next line
        marginBottom: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#0961C9',
        textAlign: "center",
        marginRight: 8, // Adds some space between name and institution
    },
    institution: {
        fontSize: 16,
        color: '#808080',
        textAlign: "center",
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        marginHorizontal: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold", 
        color: '#0961C9', 
        marginBottom: 4,
    },
    value: {
        fontSize: 16,
        marginVertical: 4,
        color: '#808080',
    },
    button: {
        backgroundColor: '#0961C9',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    image: {
        width: 128,
        height: 128, 
        marginBottom: 16, 
        borderRadius: 64,
        alignSelf: 'center',
    },
});

export default SpeakerModal;
