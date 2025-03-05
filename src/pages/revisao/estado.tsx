import Area from "@/components/template/Area";
import { useState } from "react";

export default function RevisãoEstado() {
    const [texto, setTexto] = useState('');

    return(
        <div className="p-20">
            <Area titulo="Revisão Estado" cor="sky">
                <input 
                    type="text" 
                    className="input" 
                    value={texto}
                    onChange={e => {
                        console.log(texto);
                        setTexto(e.target.value)
                    }}
                />
            </Area>
        </div>
    );
}