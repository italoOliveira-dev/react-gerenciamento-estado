import Carrinho from "@/components/loja/Carrinho";
import Catalogo from "@/components/loja/Catalogo";
import { CarrinhoProvider } from "@/context/CarrinhoContext";
import { CatalogoProvider } from "@/context/CatalogoContext";

export default function Loja() {
    return (
        <CarrinhoProvider>
            <CatalogoProvider>
                <div className="flex flex-col gap-4 p-7">
                    <Carrinho></Carrinho>
                    <Catalogo></Catalogo>
                </div>
            </CatalogoProvider>
        </CarrinhoProvider>
    );
}