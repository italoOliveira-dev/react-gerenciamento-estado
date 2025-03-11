import { IconShoppingCart } from "@tabler/icons-react";

export default function CarrinhoVazio() {
    return (
        <div className="flex flex-col items-center opacity-70">
            <IconShoppingCart size={60} stroke={1}/>
            <span>Nunhum item no carrinho</span>
        </div>
    );
}