import { useContext } from 'react';
import Estatistica from './Estatistica';
import CursoContext from '@/context/CursoContext';

export default function Estatisticas() {
  const {
    quantidadeAulas,
    quantidadeAulasConcluidas,
    duracaoTotal,
    duracaoConcluida,
    porcentagemConcluido
  } = useContext(CursoContext);

  return (
    <div
      className="
                flex justify-around items-center
                w-4/5 h-24 bg-zinc-700 rounded-lg
            "
    >
      <Estatistica valor={quantidadeAulas} texto="Qtde Aulas" />
      <Estatistica valor={quantidadeAulasConcluidas} texto="Aulas concluídas" />
      <Estatistica valor={duracaoTotal} texto="Duração total" />
      <Estatistica valor={duracaoConcluida} texto="Duração Concluída" />
      <Estatistica valor={porcentagemConcluido} texto="Percentual Conclusão" />
    </div>
  );
}
