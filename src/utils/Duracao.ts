export default class Duracao {
    static duracaoEmMinutos(segundos: number) {
        return Math.round(segundos / 60) + "m"
    }
}