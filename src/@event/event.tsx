export interface Speaker {
    id: number;
    name: string;
    title: string;
    local: string;
    instituition: string;
    photoUri?: string;
    sessions: {
        title: string;
        date: string;
        startTime: string;
        endTime: string;
    }[]
};

export interface Mediadores {
    id: number,
    name: string,
    title: string,
    instituition: string,
    local: string,
    photoUri?: string
};

export const mediadores: Mediadores[] =[
    {
        id: 1,
        name: 'Willy Ank de Morais',
        title: 'Mediador',
        instituition: 'Unisanta/Unaerp',
        local:'Auditório do CT',
    },
    {
        id: 2,
        name: 'Nicolau Apoena Castro',
        title: 'Mediador',
        instituition: 'UFRN',
        local:'Auditório do CT',
    },
    {
        id: 3,
        name: 'Karina Barcelos ',
        title: 'Mediador',
        instituition: 'CEFET-MG/Abinox',
        local:'Auditório do CT',

    },
    {
        id: 4,
        name: 'Carlos O. D. Martins',
        title: 'Mediador',
        instituition: 'UFS/Abendi',
        local:'Auditório do CT',

    },
];

export const speakers: Speaker[] =[

    //MC1
    {
        id: 1,
        name: 'Walman B. de Castro',
        title: 'Minicurso I',
        local: 'Auditório do CT, Bloco 1',
        instituition: 'UFCG',

        sessions: [{
            title: 'Fundamentos dos processos de fabricação de produtos metálicos',
            date: '06/11',
            startTime: '08:00',
            endTime: '10:00'
        }]
    },
    {
        id: 2,
        name: 'Tetyana Gurova',
        title: 'Minicurso I',
        local: 'Auditório do CT, Bloco 1',
        instituition: 'UERJ',

        sessions: [{
            title: 'Tensões reiduais: Fundamentos e técnicas de medição',
            date: '06/11',
            startTime: '10:00',
            endTime: '12:00'
        }]
    },

    // ST1
    {
        id: 3,
        name: 'Claudemiro Bolfarini',
        title: 'Sessão temática I',
        local: 'Auditório do CT',
        instituition: 'UFSCar',

        sessions: [{
            title: 'Análise e prevenção de falhas em peças fundidas',
            date: '06/11',
            startTime: '14:00',
            endTime: '14:30'
        }]
    },
    {
        id: 4,
        name: 'Sérgio R. Barra',
        title: 'Sessão temática I',
        local: 'Auditório do CT',
        instituition: 'UFRN/Rede PDIMat',

        sessions: [{
            title: 'Fundamento das técnicas de mitigação do processo de corrosão',
            date: '06/11',
            startTime: '14:30',
            endTime: '15:00'
        }]
    },
    {
        id: 5,
        name: 'Carlos A. de Souza',
        title: 'Sessão temática I',
        local: 'Auditório do CT',
        instituition: 'Trabspetro/SENAI Cimatec',

        sessions: [{
            title: 'Segurança operacional e meio ambiente na operação de dutos para o transporte de hidrogênio verde',
            date: '06/11',
            startTime: '15:00',
            endTime: '15:30'
        }]
    },
    {
        id: 6,
        name: 'Rodrigo Costa-Félix',
        title: 'Sessão temática I',
        local: 'Auditório do CT',
        instituition: 'INMETRO/SBM',
        sessions: [{
            title: 'A importância da metrologia como ferramenta de inovação e competitividade',
            date: '06/11',
            startTime: '15:30',
            endTime: '16:00'
        }]
    },
    {
        id: 7,
        name: 'José Eduardo Spineli',
        title: 'Sessão temática I',
        local: 'Auditório do CT',
        instituition: 'UFSCar',

        sessions: [{
            title: 'Interpretando microestruturas e propriedades em superfícies de ligas de Al tratadas a laser',
            date: '06/11',
            startTime: '16:00',
            endTime: '16:30'
        }]
    },

    //ultimo palestrante a definir

    //AC CA

    //primeira atração a confirmar
    //abertura a confirmar
    //palestra de abertura 1 a confirmar
    {
        id: 12,
        name: 'Joel Kruger',
        title: 'Palestra de abertura',
        local: 'Auditório do CT',
        instituition: 'PUCPR/CONFEA',

        sessions: [{
            title: 'Perspectivas de parcerias entre o Sistema CONFEA/CREA/MUTUA e o setor de energias e as demandas de engenharia',
            date: '06/11',
            startTime: '20:00',
            endTime: '20:30'
        }]
    },
    {
        id: 13,
        name: 'Antonio Batista R. Neto',
        title: 'Palestra de abertura',
        local: 'Auditório do CT',
        instituition: 'Vita Digital/UEPA',

        sessions: [{
            title: 'O cenário do setor de energias e as demandas de engenharia',
            date: '06/11',
            startTime: '20:30',
            endTime: '21:30'
        }]
    },


    //MC2
    {
        id: 14,
        name: 'Karina Barcelos Gonçalves',
        title: 'Minicurso II',
        local: 'Auditório do CT, Bloco 1',
        instituition: 'CEFETMG/ABINOX',

        sessions: [{
            title: 'Conhecendo e especificando os aços inoxidáveis',
            date: '07/11',
            startTime: '08:00',
            endTime: '10:00'
        }]
    },
    {
        id: 15,
        name: 'Reinaldo Oliveira | Joern Schmidt',
        title: 'Minicurso II',
        local: 'Auditório do CT, Bloco 1',
        instituition: 'MAGMA',

        sessions: [{
            title: 'Custos e Produtividade em Fundição: Aplicação das tecnologias como vantagem competitiva',
            date: '07/11',
            startTime: '10:00',
            endTime: '12:00'
        }]
    },

    //ST2
    {
        id: 16,
        name: 'Vicente Trindade',
        title: 'Sessão temática II',
        local: 'Auditório do CT',
        instituition: 'Vallourec',

        sessions: [{
            title: 'Desenvolvimento de aços para o transporte de H: Estado da Arte',
            date: '07/11',
            startTime: '14:00',
            endTime: '14:30'
        }]
    },
    {
        id: 17,
        name: 'Tiago Lima',
        title: 'Sessão temática II',
        local: 'Auditório do CT',
        instituition: 'Aperam',

        sessions: [{
            title: 'Aplicações e diferenciais dos aços inoxidáveis nos setores de energias renováveis e não renováveis',
            date: '07/11',
            startTime: '14:30',
            endTime: '15:00'
        }]
    },
    {
        id: 18,
        name: 'André Luiz V. Costa e Silva',
        title: 'Sessão temática II',
        local: 'Auditório do CT',
        instituition: 'UFF',

        sessions: [{
            title: 'Desenvolvimento dos aços: Metalurgia física versus ferramentas termodinâmicas',
            date: '07/11',
            startTime: '15:00',
            endTime: '15:30'
        }]
    },

    //id 19 a confirmar
    {
        id: 20,
        name: 'José Francisco da Silva Filho',
        title: 'Sessão temática II',
        local: 'Auditório do CT',
        instituition: 'ArcelorMittal',

        sessions: [{
            title: 'Desenvolvimento e aplicabilidades dos revestimentos metálicos para o setor de energias',
            date: '07/11',
            startTime: '16:00',
            endTime: '16:30'
        }]
    },

    //ST3

    {
        id: 21,
        name: 'Rosângela Stankowitz',
        title: 'Sessão temática III',
        local: 'Auditório do CT',
        instituition: 'UTFem/UTFPR',

        sessions: [{
            title: 'A quebra dos viéses inconsistentes',
            date: '07/11',
            startTime: '18:30',
            endTime: '19:00'
        }]
    },
    {
        id: 22,
        name: 'Gabriela Ribeiro Pereira',
        title: 'Sessão temática III',
        local: 'Auditório do CT',
        instituition: 'PEMM/COPPE',

        sessions: [{
            title: 'Programas de incentivo a meninas e mulheres nas Ciências no Rio de Janeiro',
            date: '07/11',
            startTime: '19:00',
            endTime: '19:30'
        }]
    },
    {
        id: 23,
        name: 'Ana Keli Martins',
        title: 'Sessão temática III',
        local: 'Auditório do CT',
        instituition: 'Projeto Botina & Salto',

        sessions: [{
            title: 'Os desafios de usar Botina & Salto',
            date: '07/11',
            startTime: '19:30',
            endTime: '20:00'
        }]
    },

    //id 24 a definir
    //id 25 a definir

    {
        id: 26,
        name: 'Alisson Duarte',
        title: 'Minicurso 3',
        local: 'Auditório do CT, Bloco 1',
        instituition: '6Pro/UFMG',

        sessions: [{
            title: 'Simulação numérica como ferramenta no processo de conformação mecânica',
            date: '08/11',
            startTime: '08:00',
            endTime: '08:30'
        }]
    },
    {
        id: 27,
        name: 'Willy Ank de Morais',
        title: 'Minicurso 3',
        local: 'Auditório do CT, Bloco 1',
        instituition: 'Unisanta/Unaerp',

        sessions: [{
            title: 'Ensaios Mecânicos: Particularidades na execução e representatividade',
            date: '08/11',
            startTime: '08:00',
            endTime: '08:30'
        }]
    },
    {
        id: 28,
        name: 'Byron G. de Souza Filho',
        title: 'Sessão temática IV',
        local: 'Auditório do CT',
        instituition: 'CTDUT',

        sessions: [{
            title: 'Inspeção interna de dutos usando PIGs inteligentes',
            date: '08/11',
            startTime: '18:30',
            endTime: '19:00'
        }]
    },
    {
        id: 29,
        name: 'Gabriela R. Pereira',
        title: 'Sessão temática IV',
        local: 'Auditório do CT',
        instituition: 'COPPE/UFRJ',

        sessions: [{
            title: 'A área dos END e a cooperação com o setor industrial',
            date: '08/11',
            startTime: '19:00',
            endTime: '19:30'
        }]
    },
    {
        id: 30,
        name: 'Camila Pontes Pena',
        title: 'Sessão temática IV',
        local: 'Auditório do CT',
        instituition: 'IFBaiano',

        sessions: [{
            title: 'Inspeção Baseada em Risco P&G: Cenário e perspectivas',
            date: '08/11',
            startTime: '19:30',
            endTime: '20:00'
        }]
    },
    {
        id: 31,
        name: 'Heloisa Cunha Furtado',
        title: 'Sessão temática IV',
        local: 'Auditório do CT',
        instituition: 'COPPE/UFRJ',

        sessions: [{
            title: 'Inspeção e manutenção de aerogeradores',
            date: '08/11',
            startTime: '20:00',
            endTime: '20:30'
        }]
    },

    //id 32 a confirmar
]