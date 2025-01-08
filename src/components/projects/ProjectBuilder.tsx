import React from "react";
import style from "@/components/projects/projectbuilder.module.css";
import { projects } from "@/data/projects";
import ProjectCard from "./project-card/ProjectCard";
import LanguageToken from "@/util/intl/Languages";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { CodeXml } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


interface ProjectBuilderProps {
  languageToken: LanguageToken;
}

const ProjectBuilder: React.FC<ProjectBuilderProps> = ({ languageToken }) => {
  return (
    <main className={style.container}>
      <span className={style.title}>
        <p>Explore</p>
        <h1>{languageToken.getProjectsTitle()}</h1>
        <CodeXml />
      </span>
      <div className={style.slides}>
        <Swiper
          className={style.swiper}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
          loop
          speed={700}
          breakpoints={{
            640: { slidesPerView: 1 }, // Para telas menores que 640px
            1000: { slidesPerView: 2 }, // Para telas menores que 768px
            1500: { slidesPerView: 3 }, // Para telas menores que 1024px
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} >
              <ProjectCard
                key={project.id}
                languageToken={languageToken}
                project={project}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default ProjectBuilder;