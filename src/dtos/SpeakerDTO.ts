export interface Speaker {
    id: string;
    name: string;
    institution: string;
    photoUri: string;
    presentationTitle: string;
    date: string; 
    startTime: string; 
    endTime: string; 
    location: string; 
    congressId: string; 
    administratorId: string; // Se aplicável
    categoryId: string; // Se aplicável
}
