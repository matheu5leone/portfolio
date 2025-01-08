export const projects = [
  {
    id: 1,
    title: {
      en: "Data ETL Netflix",
      pt: "ETL de Dados para Netflix"
    },
    description: {
      en: "This project automates the ETL (Extract, Transform, Load) process for Excel files. It scans a folder for raw Excel files, extracts relevant data, and processes it to include metadata such as the file name, location (e.g., Brazil, France, Italy), and campaign information. The final consolidated and cleaned data is exported to a single Excel file for further analysis.",
      pt: "Este projeto automatiza o processo de ETL (Extração, Transformação e Carga) para arquivos Excel. Ele verifica uma pasta em busca de arquivos Excel brutos, extrai dados relevantes e processa informações adicionais, como o nome do arquivo, localização (ex.: Brasil, França, Itália) e dados de campanha. Os dados consolidados e limpos são exportados para um único arquivo Excel para análises futuras."
    },
    technologies: ["Python", "Pandas", "OS", "Glob", "ExcelWriter"],
    image: "/portfolio/project-banners/etl-netflix.png",
    link: "https://github.com/matheu5leone/python-etl-netflix",
    colaborators: [],
    profiles: []
  },
  {
    id: 2,
    title: {
      en: "Aranhobot - Discord Bot",
      pt: "Aranhobot - Bot para Discord"
    },
    description: {
      en: "This project involves the creation and deployment of a Discord bot using Node.js and the Discord.js library. The bot dynamically registers commands, handles user interactions like slash commands and select menus, and provides relevant documentation links. Additionally, it includes an Express server to maintain uptime and handle HTTP requests, ensuring the bot runs seamlessly.",
      pt: "Este projeto envolve a criação e o deployment de um bot para Discord usando Node.js e a biblioteca Discord.js. O bot registra comandos dinamicamente, lida com interações de usuários, como comandos de barra e menus de seleção, e fornece links para documentações relevantes. Além disso, inclui um servidor Express para manter o bot ativo e lidar com requisições HTTP, garantindo operação contínua."
    },
    technologies: ["Node.js", "Discord.js", "Express", "dotenv", "REST API"],
    image: "/portfolio/project-banners/aranhobot.jpg",
    link: "https://github.com/matheu5leone/aranhobot",
    colaborators: [],
    profiles: []
  },
  {
    id: 3,
    title: {
      en: "Desafio Magalu",
      pt: "Desafio Magalu"
    },
    description: {
      en: "This project is a challenge involving the development of a RESTful API using Java 21 and Spring Boot. The application integrates with a MySQL database through Spring Data JPA and includes scheduled tasks implemented with Spring Scheduler. The project is containerized using Docker for seamless deployment and scalability. Tools like DBeaver and Insomnia were used for database management and API testing, respectively, with a ready-to-import JSON file provided for quick API interaction.",
      pt: "Este projeto é um desafio que envolve o desenvolvimento de uma API RESTful utilizando Java 21 e Spring Boot. A aplicação integra-se com um banco de dados MySQL através do Spring Data JPA e inclui tarefas agendadas implementadas com o Spring Scheduler. O projeto é containerizado utilizando Docker para facilitar o deployment e a escalabilidade. Ferramentas como DBeaver e Insomnia foram utilizadas para gerenciamento do banco de dados e testes da API, com um arquivo JSON pronto para importação e interação rápida com a API."
    },
    technologies: ["Java", "Spring Boot", "JPA", "Spring Scheduler", "Docker", "MySQL"],
    image: "/portfolio/project-banners/logo-magalu.png",
    link: "https://github.com/matheu5leone/desafio-magalu",
    colaborators: [],
    profiles: []
  },
  {
    id: 4,
    title: {
      en: "Capivara Tech - Minecraft Server Hosting",
      pt: "Capivara Tech - Hospedagem de Servidores Minecraft"
    },
    description: {
      en: "Capivara Tech's Minecraft Server Hosting platform allows users to create and manage Minecraft servers seamlessly on AWS. The backend, powered by Spring Boot with integrated Spring Security, ensures secure and scalable API functionality for server management, user authentication, and payment handling. The frontend, built with React and Next.js, provides an intuitive user experience for server configuration, deployment, and monitoring. The platform leverages Docker for containerized deployments and AWS for high availability and performance.",
      pt: "A plataforma de hospedagem de servidores Minecraft da Capivara Tech permite que os usuários criem e gerenciem servidores Minecraft de forma simples e eficiente na AWS. O backend, desenvolvido com Spring Boot e integrado ao Spring Security, garante uma API segura e escalável para gerenciamento de servidores, autenticação de usuários e processamento de pagamentos. O frontend, construído com React e Next.js, oferece uma experiência intuitiva para configuração, implantação e monitoramento de servidores. A plataforma utiliza Docker para deploys containerizados e AWS para alta disponibilidade e desempenho."
    },
    technologies: ["AWS S3", "AWS ECS", "Java", "Spring Boot", "Spring Security", "Docker", "React", "Next.js"],
    image: "/portfolio/project-banners/capivara.png",
    link: "https://github.com/capivara-hosting",
    colaborators: ["/portfolio/project-banners/colaborators/guilherme.jpeg"],
    profiles: ["https://github.com/gcomartins"]
  },
  {
    id: 5,
    title: {
      en: "Capivara Tech - Memomate Notes & Tasks API",
      pt: "Capivara Tech - Memomate API de Notas e Tarefas"
    },
    description: {
      en: "Memomate is a product developed by Capivara Tech for managing notes and tasks. Built with Java and Spring Boot, the API features JPA for database operations, Spring Security for user authentication, and integrates seamlessly with a MySQL database. Docker is used for containerization, ensuring easy deployment and scalability. This API serves as the backbone for a task management system, enabling efficient organization and collaboration.",
      pt: "O Memomate é um Produto desenvolvido pela Capivara Tech para gerenciar notas e tarefas. Construída com Java e Spring Boot, a API utiliza JPA para operações de banco de dados, Spring Security para autenticação de usuários e se integra de forma eficiente a um banco de dados MySQL. O Docker é usado para containerização, garantindo fácil deploy e escalabilidade. Esta API é o núcleo de um sistema de gerenciamento de tarefas, permitindo organização e colaboração eficazes."
    },
    technologies: ["Java", "Spring Boot", "JPA", "Spring Security", "Docker", "MySQL"],
    image: "/portfolio/project-banners/capivara.png",
    link: "https://github.com/matheu5leone/backend-memomate",
    colaborators: [],
    profiles: []
  },
  {
    id: 6,
    title: {
      en: "Changer - File Conversion Platform",
      pt: "Changer - Plataforma de Conversão de Arquivos"
    },
    description: {
      en: "Changer is a file conversion platform that enables users to seamlessly convert files between various formats. The backend, developed with Spring Boot, handles file processing efficiently and integrates with AWS S3 for secure file storage. The frontend, built with React, offers a user-friendly interface for uploading, managing, and converting files. With Spring Security ensuring robust authentication and Swagger providing comprehensive API documentation, the platform is designed for scalability and reliability. It runs on AWS EC2 instances and utilizes Docker for containerized deployments.",
      pt: "Changer é uma plataforma de conversão de arquivos que permite aos usuários converter arquivos entre diversos formatos de forma prática. O backend, desenvolvido com Spring Boot, processa arquivos de maneira eficiente e integra-se ao AWS S3 para armazenamento seguro. O frontend, criado com React, oferece uma interface amigável para upload, gerenciamento e conversão de arquivos. Com Spring Security garantindo autenticação robusta e Swagger fornecendo documentação completa da API, a plataforma foi projetada para escalabilidade e confiabilidade. Ela opera em instâncias EC2 da AWS e utiliza Docker para deploys containerizados."
    },
    technologies: ["AWS S3", "AWS EC2", "Java", "Spring Boot", "Spring Security", "Docker", "React", "Swagger", "SQL Server"],
    image: "/portfolio/project-banners/changer.png",
    link: "https://github.com/orgs/ChangerInc/repositories",
    colaborators: ["/portfolio/project-banners/colaborators/leo.png", "/portfolio/project-banners/colaborators/mateus.jpeg", "/portfolio/project-banners/colaborators/nata.jpeg", "/portfolio/project-banners/colaborators/sara.png"],
    profiles: ["https://github.com/LeonardoLopesPrado", "https://github.com/MateusjfSilva", "https://github.com/NataSFSilva", "https://github.com/SaraSouzzz"]
  },
  {
    id: 7,
    title: {
      en: "Datawatch - Machine and System Monitoring",
      pt: "Datawatch - Monitoramento de Máquinas e Sistemas"
    },
    description: {
      en: "Datawatch is a platform designed to monitor and secure machine parks and IT systems. With a highly specialized team, we protect sensitive data and confidential information for clients across various industries. The platform employs cutting-edge technologies and industry best practices to identify, manage, and mitigate risks. Datawatch offers real-time monitoring, robust analytics, and proactive threat detection, ensuring data integrity and resilience against internal and external threats. Tailored solutions cater to clients' unique challenges, delivering confidence and security for businesses of all sizes.",
      pt: "Datawatch é uma plataforma projetada para monitorar e proteger parques de máquinas e sistemas de TI. Com uma equipe altamente especializada, protegemos dados sensíveis e informações confidenciais de clientes de diversos setores. A plataforma utiliza tecnologias de ponta e melhores práticas da indústria para identificar, gerenciar e mitigar riscos. O Datawatch oferece monitoramento em tempo real, análises robustas e detecção proativa de ameaças, garantindo integridade e resiliência dos dados contra ameaças internas e externas. Soluções personalizadas atendem aos desafios únicos dos clientes, proporcionando confiança e segurança para empresas de todos os tamanhos."
    },
    technologies: ["AWS EC2", "Java", "Shell", "HTML", "CSS", "JavaScript", "SQL Server"],
    image: "/portfolio/project-banners/datawatch.png",
    link: "https://github.com/orgs/Organizacao-X/repositories",
    colaborators: ["/portfolio/project-banners/colaborators/milagres.png", "/portfolio/project-banners/colaborators/nata.jpeg", "/portfolio/project-banners/colaborators/valadares.jpeg", "/portfolio/project-banners/colaborators/victor.png"],
    profiles: ["https://github.com/LucasSouza1407", "https://github.com/NataSFSilva", "https://github.com/SofiVBastos", "https://github.com/10340314"]
  }
];
