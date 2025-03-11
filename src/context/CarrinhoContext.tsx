import ItemCarrinho from "@/data/model/ItemCarrinho";
import Produto from "@/data/model/Produto";
import { createContext, useState } from "react";

interface CarrinhoContextProps {
    itens: ItemCarrinho[]
    valorTotal: number
    adicionarItem: (produto: Produto) => void
    removerItem: (produto: Produto) => void
    limparItens: () => void
}

const CarrinhoContext = createContext<CarrinhoContextProps>({} as any);
export default CarrinhoContext;

interface CarrinhoProviderProps {
    children: any
}

export function CarrinhoProvider(props: CarrinhoProviderProps) {

    const [itens, setItens] = useState<ItemCarrinho[]>([]);

    function adicionarItem(produto: Produto) {
        const item = itens.find(i => i.produto.id === produto.id) ?? { produto, quantidade: 0 };
        const novoItem = { ...item, quantidade: item.quantidade + 1};
        const outrosItens = itens.filter(i => i.produto.id !== produto.id);
        setItens([...outrosItens, novoItem].sort(ordernarItens));
    }

    function removerItem(produto: Produto) {
        const novosItens = itens.map((item) => {
            return item.produto.id === produto.id 
                ? {...item, quantidade: item.quantidade - 1} 
                : item
        }).filter((item) => item.quantidade > 0);

        setItens(novosItens);

        // const item = itens.find(i => i.produto.id === produto.id) ?? { produto, quantidade: 0}
        // const novoItem = item.quantidade !== 0 ? { ...item, quantidade: item.quantidade - 1} : { produto, quantidade: 0}
        // const outrosItens = itens.filter(i => i.produto.id !== produto.id);
        // setItens([...outrosItens, novoItem].sort(ordernarItens));
    }

    function calcularValorTotal(): number {
        return itens.reduce((total: number, item: ItemCarrinho) => {
            return total  + (item.produto.preco * item.quantidade)
        }, 0)
    }

    function limparItens() {
        setItens([])
    }

    function ordernarItens(itemA: ItemCarrinho, itemB: ItemCarrinho) {
        return itemA.produto.id - itemB.produto.id;
    }

    const valorContext: CarrinhoContextProps = {
        itens, 
        adicionarItem, 
        removerItem,
        limparItens,
        get valorTotal() {
            return calcularValorTotal()
        }
    }

    return (
        <CarrinhoContext.Provider value={valorContext}>
            {props.children}
        </CarrinhoContext.Provider>
    );
}