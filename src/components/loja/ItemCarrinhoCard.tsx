import CarrinhoContext from "@/context/CarrinhoContext";
import ItemCarrinho from "@/data/model/ItemCarrinho";
import Real from "@/utils/Real";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useContext } from "react";

interface ItemCarrinhoCardProps {
    item: ItemCarrinho
}

export default function ItemCarrinhoCard(props: ItemCarrinhoCardProps) {
    const { produto } = props.item;
    const { adicionarItem, removerItem } = useContext(CarrinhoContext);
    return (
        <div className="flex bg-black rounded-md p-2 gap-5">
            <span>{produto.nome}</span>
            <div className="flex items-center gap-2">
                <button className="
                    flex justify-center items-center h-5 w-5
                    bg-red-500 rounded-md hover:cursor-pointer
                " onClick={() => removerItem(produto)}>
                    <IconMinus/>
                </button>
                <span>{props.item.quantidade}</span>
                <button className="
                    flex justify-center items-center h-5 w-5
                    bg-green-500 rounded-md hover:cursor-pointer
                " onClick={() => adicionarItem(produto)}>
                    <IconPlus/>
                </button>
                <div className="bg-blue-500 rounded-md px-2 font-black">
                    <span>{Real.format((produto.preco * props.item.quantidade))}</span>
                </div>
            </div>
        </div>
    );
}