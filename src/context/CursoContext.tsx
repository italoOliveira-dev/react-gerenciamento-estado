import capitulosFake from "@/data/constants/capitulos";
import Aula from "@/data/model/Aula";
import Capitulo from "@/data/model/Capitulo";
import CursoEstatisticas from "@/data/model/CursoEstatisticas";
import { createContext, useState } from "react";

interface CursoContextProps {
    capitulos: Capitulo[]
    aulaAtual: Aula
    quantidadeAulas: number
    quantidadeAulasConcluidas: number
    duracaoTotal: string
    duracaoConcluida: string
    porcentagemConcluido: string
    selecionarAula: (aula: Aula) => void
    altenarConclusaoAula: (aula: Aula) => void
}

const CursoContext = createContext<CursoContextProps>({} as any);

export function CursoProvider(props: any) {

    const [capitulos, setCapitulos] = useState(capitulosFake);
    const [aulaAtual, setAulaAtual] = useState(capitulosFake[0].aulas[0]);

    const cursoEstatisticas = new CursoEstatisticas(capitulos);

    function altenarConclusaoAula(aulaSelecionada: Aula) {
        const novosCapitulos = capitulos.map(capitulo => {
            const novasAulas = capitulo.aulas.map(aula => {
                return aula.ordem === aulaSelecionada.ordem
                    ? {...aula, concluida: !(aula.concluida ?? false)}
                    : aula
            })
            return {...capitulo, aulas: novasAulas}
        })

        setCapitulos(novosCapitulos)
    }

    function selecionarAula(aula: Aula) {
        setAulaAtual(aula)
    }

    return (
        <CursoContext.Provider value={{
            capitulos,
            aulaAtual,
            selecionarAula,
            altenarConclusaoAula,
            get quantidadeAulas() { return cursoEstatisticas.quantidadeAulas()},
            get quantidadeAulasConcluidas() { return cursoEstatisticas.quantidadeAulasConcluidas() },
            get duracaoTotal() { return cursoEstatisticas.duracaoTotal() },
            get duracaoConcluida() { return cursoEstatisticas.duracaoConluida() },
            get porcentagemConcluido() { return cursoEstatisticas.porcentagemConcluido() }
        }}>
            {props.children}
        </CursoContext.Provider>
    );
}

export default CursoContext;