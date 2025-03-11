import Produto from "../model/Produto";

function idAleatorio() {
    return Math.round(Math.random() * (100 - 1) + 1);
}

const produtos: Produto[] = [
    {
        id: 1,
        nome: "Camiseta",
        preco: 39.9,
        descricao: "Camiseta branca de algodão",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`,
    },
    {
        id: 2,
        nome: "Calça Jeans",
        preco: 99.9,
        descricao: "Calça azul de algodão",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`,
    },
    {
        id: 3,
        nome: "Tênis",
        preco: 129.9,
        descricao: "Tênis esportivo",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`,
    },
    {
        id: 4,
        nome: "Camisa Polo",
        preco: 49.9,
        descricao: "Camisa polo azul",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`
    },
    {
        id: 5,
        nome: "Camisa Social",
        preco: 79.9,
        descricao: "Camisa social branca",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`,
    },
    {
        id: 6,
        nome: "Blusa",
        preco: 29.9,
        descricao: "Blusa de lã",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`,
    },
    {
        id: 7,
        nome: "Jaqueta",
        preco: 129.9,
        descricao: "Jaqueta de couro",
        imagem: `https://picsum.photos/id/${idAleatorio()}/300/150?clothing`,
    },
]

export default produtos;