import LanguageTokens from "./Languages";


class En implements LanguageTokens {

    getHello(): string {

        return "Hello!"
    }
    getGreetings(): string {
        return "Hello, I am"
    }
    getRole(): string {
        return "Systems Analyst and Developer"
    }

}

export default En