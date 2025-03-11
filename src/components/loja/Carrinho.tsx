import { useContext } from "react";
import Area from "../template/Area";
import CarrinhoVazio from "./CarrinhoVazio";
import CarrinhoContext from "@/context/CarrinhoContext";
import ItemCarrinhoCard from "./ItemCarrinhoCard";
import Real from "@/utils/Real";
import { IconClearAll, IconHourglassEmpty, IconMoodEmpty, IconTrash } from "@tabler/icons-react";

export default function Carrinho() {

    const { itens, valorTotal, limparItens } = useContext(CarrinhoContext);
    const temItens = itens.length !== 0;

    function renderizar() {
        return !temItens ? (<CarrinhoVazio />) : (
            itens.map(item => {
                const { produto } = item;
                return <ItemCarrinhoCard key={produto.id} item={item}/>
            })
        );
    }

    return(
        <Area titulo="Carrinho" sumario={Real.format(valorTotal)} cor="green">
            <div className="flex flex-col items-center gap-5">
                <div className="flex flex-wrap justify-center gap-4">
                    {renderizar()}
                </div>
                {temItens && 
                    <div>
                        <button 
                            className="
                                flex gap-2 items-center
                                bg-red-500 px-4 py-2 rounded-md font-bold
                                hover:cursor-pointer hover:bg-red-700
                            "
                            onClick={() => limparItens()}
                        >
                            <span>Limpar carrinho</span>
                            <IconTrash size={20} stroke={2}/>
                        </button>
                    </div>
                }
            </div>
        </Area>
    );
}