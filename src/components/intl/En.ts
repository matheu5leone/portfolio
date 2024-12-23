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
    getTitleGraduation(): string {
        return "Graduation"
    }
    getTitleExperience(): string {
        return "Experience"
    }
    getCourse(): string {
        return "System Analysis and Development"
    }
    getDegree(): string {
        return "Associate"
    }
    getDockFunction(): string {
        return "Springboot Backend"
    }
    getDockRole(): string {
        return "Software Engineer"
    }
    getResume(): string {
        return "Technologist in Systems Analysis and Development with experience in Java backend development and SQL Server at Dock Tech, where he collaborated in agile teams to develop and optimize RESTful APIs, improve databases, and solve issues for corporate clients. Skilled in Java, Spring Boot, Docker, Kubernetes, and cloud platforms (AWS and Azure), with knowledge of monitoring tools such as Splunk and Datadog. Fluent in Portuguese and proficient in advanced English, he seeks to contribute to dynamic and challenging environments to enhance his skills and assist in delivering innovative solutions."
    }

}

export default En