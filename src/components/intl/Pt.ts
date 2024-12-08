import LanguageTokens from "./Languages";


class Pt implements LanguageTokens {

    getHello(): string {

        return "Olá!"
    }
    getGreetings(): string {
        return "Olá, eu sou"
    }
    getRole(): string {
        return "Analista de Sistemas e Desenvolvedor"
    }


}

export default Pt