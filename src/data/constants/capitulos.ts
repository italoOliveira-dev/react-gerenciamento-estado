import Capitulo from "../model/Capitulo";

const capitulos: Capitulo[] = [
    {
        id: 1,
        titulo: "Fundamentos do TypeScript",
        ordem: 1,
        aulas: [
            {
                ordem: 1,
                titulo: "Introdução ao TypeScript",
                duracao: 60 * 30,
                videoUrl: "https://www.youtube.com/embed/BwuLxPH8IDs?si=5X6z7Y8Z9A0B1C2D"
            },
            {
                ordem: 2,
                titulo: "Tipos Básicos",
                duracao: 60 * 45,
                videoUrl: "https://www.youtube.com/embed/d56mG7DezGs?si=E1F2G3H4I5J6K7L8"
            },
            {
                ordem: 3,
                titulo: "Interfaces e Tipos Personalizados",
                duracao: 60 * 50,
                videoUrl: "https://www.youtube.com/embed/3qBXWUpoPHo?si=M1N2O3P4Q5R6S7T8"
            },
            {
                ordem: 4,
                titulo: "Funções e Parâmetros Tipados",
                duracao: 60 * 40,
                videoUrl: "https://www.youtube.com/embed/9UY8Qz6cR7Q?si=U1V2W3X4Y5Z6A7B8"
            },
            {
                ordem: 5,
                titulo: "Classes e Herança",
                duracao: 60 * 55,
                videoUrl: "https://www.youtube.com/embed/8Z9XcY7Q6P5?si=C1D2E3F4G5H6I7J8"
            },
            {
                ordem: 6,
                titulo: "Módulos e Namespaces",
                duracao: 60 * 35,
                videoUrl: "https://www.youtube.com/embed/7T8U9V0W1X2?si=K1L2M3N4O5P6Q7R8"
            },
            {
                ordem: 7,
                titulo: "Decorators e Metadados",
                duracao: 60 * 60,
                videoUrl: "https://www.youtube.com/embed/6Y5Z4X3W2V1?si=G1H2I3J4K5L6M7N8"
            }
        ]
    },
    {
        id: 2,
        titulo: "Introdução ao React",
        ordem: 2,
        aulas: [
            {
                ordem: 8,
                titulo: "O que é React?",
                duracao: 60 * 25,
                videoUrl: "https://www.youtube.com/embed/Ke90Tje7VS0?si=vkcfn4FmC50m52bG"
            },
            {
                ordem: 9,
                titulo: "JSX e Componentes",
                duracao: 60 * 40,
                videoUrl: "https://www.youtube.com/embed/7Y8U9I0O1P2?si=A1B2C3D4E5F6G7H8"
            },
            {
                ordem: 10,
                titulo: "Props e Estado",
                duracao: 60 * 50,
                videoUrl: "https://www.youtube.com/embed/6X5Y4Z3W2V1?si=I1J2K3L4M5N6O7P8"
            },
            {
                ordem: 11,
                titulo: "Ciclo de Vida dos Componentes",
                duracao: 60 * 45,
                videoUrl: "https://www.youtube.com/embed/5T6U7V8W9X0?si=Q1R2S3T4U5V6W7X8"
            },
            {
                ordem: 12,
                titulo: "Hooks: useState e useEffect",
                duracao: 60 * 55,
                videoUrl: "https://www.youtube.com/embed/4Y3Z2W1V0U9?si=Y1Z2A3B4C5D6E7F8"
            },
            {
                ordem: 13,
                titulo: "React Router",
                duracao: 60 * 60,
                videoUrl: "https://www.youtube.com/embed/3X4Y5Z6W7V8?si=O1P2Q3R4S5T6U7V8"
            },
            {
                ordem: 14,
                titulo: "Context API",
                duracao: 60 * 50,
                videoUrl: "https://www.youtube.com/embed/2W3X4Y5Z6V7?si=E1F2G3H4I5J6K7L8"
            }
        ]
    },
    {
        id: 3,
        titulo: "Desenvolvimento Avançado com Node.js",
        ordem: 3,
        aulas: [
            {
                ordem: 15,
                titulo: "Introdução ao Node.js",
                duracao: 60 * 30,
                videoUrl: "https://www.youtube.com/embed/f2EqECiTBL8?si=vkcfn4FmC50m52bG"
            },
            {
                ordem: 16,
                titulo: "Módulos e NPM",
                duracao: 60 * 40,
                videoUrl: "https://www.youtube.com/embed/1X2Y3Z4W5V6?si=U1V2W3X4Y5Z6A7B8"
            },
            {
                ordem: 17,
                titulo: "Criando um Servidor HTTP",
                duracao: 60 * 50,
                videoUrl: "https://www.youtube.com/embed/9A8B7C6D5E4?si=C1D2E3F4G5H6I7J8"
            },
            {
                ordem: 18,
                titulo: "Trabalhando com Express.js",
                duracao: 60 * 55,
                videoUrl: "https://www.youtube.com/embed/8Z9XcY7Q6P5?si=K1L2M3N4O5P6Q7R8"
            },
            {
                ordem: 19,
                titulo: "Banco de Dados com MongoDB",
                duracao: 60 * 60,
                videoUrl: "https://www.youtube.com/embed/7T8U9V0W1X2?si=M1N2O3P4Q5R6S7T8"
            },
            {
                ordem: 20,
                titulo: "Autenticação e Segurança",
                duracao: 60 * 50,
                videoUrl: "https://www.youtube.com/embed/6Y5Z4X3W2V1?si=A1B2C3D4E5F6G7H8"
            },
            {
                ordem: 21,
                titulo: "Deploy de Aplicações Node.js",
                duracao: 60 * 45,
                videoUrl: "https://www.youtube.com/embed/5T6U7V8W9X0?si=G1H2I3J4K5L6M7N8"
            }
        ]
    }
];

export default capitulos;