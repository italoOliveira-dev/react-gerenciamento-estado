import { createContext, useState } from "react";

interface ContadorProviderProps {
    children: any
}

interface ContadorContextProps {
    numero: number
    incrementar: () => void
    decrementar: () => void
}

export const ContadorContext = createContext<ContadorContextProps>({} as ContadorContextProps);

export function ContadorProvider(props: ContadorProviderProps) {

    const [numero, setNumero] = useState(0);

    function incrementar() {
        setNumero(numero + 1);
    }

    function decrementar() {
        setNumero(numero - 1);
    }

    const valorContext = {
        numero,
        incrementar,
        decrementar
    }

    return(
        <ContadorContext.Provider value={valorContext}>
            {props.children}
        </ContadorContext.Provider>
    );
}

export default ContadorContext;