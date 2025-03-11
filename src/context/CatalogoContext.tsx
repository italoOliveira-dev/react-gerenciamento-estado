import produtos from "@/data/constants/produto";
import Produto from "@/data/model/Produto";
import { createContext, ReactNode } from "react";

interface CatalogoProviderProps {
    children: ReactNode
}

interface CatalogoContextProps {
    produtos: Produto[]
}

const CatalogoContext = createContext<CatalogoContextProps>({} as CatalogoContextProps);

export function CatalogoProvider(props: CatalogoProviderProps) {

    return (
        <CatalogoContext.Provider value={{
            produtos
        }}>
            {props.children}
        </CatalogoContext.Provider>
    );
}

export default CatalogoContext;