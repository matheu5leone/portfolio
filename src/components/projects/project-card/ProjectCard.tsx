import React from "react";
import style from "./projectcard.module.css";
import LanguageToken from "@/util/intl/Languages";
import { Github } from 'lucide-react';

interface ProjectCardProps {
    languageToken: LanguageToken;
    project: {
        id: number;
        title: {
            en: string;
            pt: string;
        };
        description: {
            en: string;
            pt: string;
        };
        technologies: string[];
        image: string;
        link: string;
        colaborators: string[];
        profiles: string[];
    };
}

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({ languageToken, project }) => {



    return (
        <main className={style.container}>
            <div className={style.imgBox}>
                <img src={project.image} />
                <a className={style.link} href={project.link} target="_blank" rel="noopener noreferrer">
                    <Github size={30} />
                    <p>Github</p>
                </a>
            </div>
            <span className={style.title}>
                <b>{languageToken.getBoolean() ? project.title.en : project.title.pt}</b>
            </span>
            <span className={style.description}>
                <p>{languageToken.getBoolean() ? project.description.en : project.description.pt}</p>
            </span>
            <div className={style.boxTagsAndColaborators}>
                <div className={style.boxTags}>
                    <span className={style.tags}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className={style.tag}>
                                <b>{tech}</b>
                            </span>
                        ))}
                    </span>
                </div>
                <div className={style.boxColaborators}>
                    <div className={style.titleAndPhotos}>
                        {project.colaborators.length === 0 ? null : <b>Colaborators</b>}
                        <span className={style.colaborators}>
                            {project.colaborators.map((colaborator, index) => (
                                <span key={index} className={style.colaborator}>
                                    <a href={project.profiles[index]} target="_blank" rel="noopener noreferrer">
                                        <img src={colaborator} alt={`Colaborator ${index + 1}`} />
                                    </a>
                                </span>
                            ))}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default ProjectCard;