import Capitulo from "./Capitulo";

export default class CursoEstatisticas {
    constructor(private capitulos: Capitulo[]) {}

    quantidadeAulas() {
        return this.capitulos.reduce((quantidade, capitulo) => quantidade + capitulo.aulas.length, 0)
    }

    quantidadeAulasConcluidas() {
        // const aulasConcluidas = this.capitulos.map(capitulo => {
        //     return capitulo.aulas.filter(aula => aula.concluida)
        // })

        // return aulasConcluidas.reduce((quantidade, aula) => quantidade + aula.length, 0)

        return this.capitulos.reduce((quantidade, capitulo) => {
            return quantidade + capitulo.aulas.filter(aula => aula.concluida).length
        }, 0)
    }

    duracaoTotalEmSegundos() {
        return this.capitulos.reduce((duracao, capitulo) => {
            return duracao + capitulo.aulas.reduce((duracao ,aula) => duracao + aula.duracao, 0)
        }, 0)
    }

    duracaoTotal() {
        const umaHoraEmSegundos = 60 * 60;
        const duracao = this.duracaoTotalEmSegundos();
        const horas = Math.floor(duracao / umaHoraEmSegundos);
        const minutos = Math.floor((duracao % umaHoraEmSegundos) / 60);

        return `${horas}h ${minutos}m`
    }

    duracaoConcluidaEmSegundos() {
        return this.capitulos.reduce((quantidade, capitulo) => {
            const aulasConcluida = capitulo.aulas.filter(aula => aula.concluida)
            return quantidade + aulasConcluida.reduce((quantidade, aula) => quantidade + aula.duracao, 0)
        }, 0)
    }

    duracaoConluida() {
        const umaHoraEmSegundos = 60 * 60;
        const duracao = this.duracaoConcluidaEmSegundos();
        const horas = Math.floor(duracao / umaHoraEmSegundos);
        const minutos = Math.floor((duracao % umaHoraEmSegundos) / 60);

        return `${horas}h ${minutos}m`
    }

    porcentagemConcluido() {
        const duracao = this.duracaoTotalEmSegundos();
        const duracaoConcluida = this.duracaoConcluidaEmSegundos();
        const porcentagem = Math.round((duracaoConcluida * 100) / duracao);

        return `${porcentagem}%`
    }
}