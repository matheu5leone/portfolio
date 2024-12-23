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
    getTitleGraduation(): string {
        return "Graduação"
    }
    getTitleExperience(): string {
        return "Experiência"
    }
    getCourse(): string {
        return "Análise e Desenvolvimento de Sistemas"
    }
    getDegree(): string {
        return "Tecnólogo"
    }
    getDockFunction(): string {
        return "Backend Springboot"
    }
    getDockRole(): string {
        return "Engenheiro de Software"
    }
    getResume(): string {
        return "Tecnólogo em Análise e Desenvolvimento de Sistemas, com experiência em desenvolvimento backend Java e SQL Server na Dock Tech, onde colaborou em times ágeis para desenvolver e otimizar APIs RESTful, aprimorar bancos de dados e resolver problemas de clientes corporativos. Possui habilidades com Java, Spring Boot, Docker, Kubernetes e plataformas de nuvem (AWS e Azure), além de conhecimento em ferramentas de monitoramento como Splunk e Datadog. Com português fluente e inglês avançado, busca contribuir em ambientes dinâmicos e desafiadores para aprimorar suas habilidades e ajudar na entrega de soluções inovadoras."
    }

}

export default Pt