import LanguageTokens from "./Languages";


class En implements LanguageTokens {
    getBoolean(): boolean {
        return true
    }
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
        return "Graduated in Systems Analysis and Development from São Paulo Tech School of Technology. Throughout my studies, I collaborated on various projects such as Datafound, Datawatch, and Changer, companies where I developed innovative technologies. These experiences prepared me for the job market by honing skills in areas such as software design, analysis, development, debugging, testing, and distributed implementation. Along this journey, I also developed self-awareness and improved my soft skills, including teamwork, communication, proactivity, feedback, and management. I worked as an intern at Dock Tech, a financial processing fintech, where I had the opportunity to sharpen my critical and analytical thinking by addressing financial transaction issues through technological solutions. I collaborated with incredible professionals, enriching my professional experience. In 2024, I contributed to developing the rules required by Visa, ensuring compliance within the card industry. Furthermore, I strive to connect not only with people in Brazil but also with the global technology community. To achieve this, I leverage my English skills as a tool to explore new horizons and expand my reach, constantly practicing my knowledge in languages, programming, analysis, and management."
      }
    getAbilitiesTitle(): string {
        return "Abilities"
    }
    getContactMe(): string {
        return "Contact me"
    }
    getCV(): string {
        return "Download Curriculum"
    }
    getDevelopedBy(): string {
        return "Developed by"
    }
    getAllRightsReserved(): string {
        return "All rights reserved"
    }
    getProjectDescription(): string {
        return "Project Description"
    }   
    getProjectsTitle(): string {
        return "My Projects"
    }
    getKnowMy(): string {
        return "Know My"
    }
    getJourney(): string {
        return "Journey"
    }
}

export default En