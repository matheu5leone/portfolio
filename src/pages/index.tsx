import { useEffect, useMemo, useState } from "react";
import style from "@/styles/Home.module.css";
import ParticlesComponent from "@/components/particles/ParticlesComponent";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import En from "@/util/intl/En";
import Pt from "@/util/intl/Pt";
import Journey from "@/components/journey/Journey";
import AbilityBuilder from "@/components/abilities/AbilityBuilder";
import Footer from "@/components/footer/Footer";
import ProjectBuilder from "@/components/projects/ProjectBuilder";

export default function Home() {
  const [isEnglish, setLanguage] = useState<boolean>(true);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const [isAnimated, setAnimation] = useState<boolean>(true);

  const languageToken = useMemo(() => {
    return isEnglish ? new En() : new Pt();
  }, [isEnglish]);

  const switchLanguage = () => setLanguage(!isEnglish);

  const changeTheme = () => {
    const newTheme = isDarkTheme ? "light" : "dark";
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setIsDarkTheme(savedTheme === "dark");
    document.body.classList.toggle("dark-theme", savedTheme === "dark");
  }, []);

  const switchAnimation = () => {
    setAnimation(!isAnimated)
  }

  return (
    <main className={style.container}>
      <Navbar
        switchLanguage={switchLanguage}
        languageToken={languageToken}
        changeTheme={changeTheme}
        toggleAnimation={switchAnimation}
        isAnimated={isAnimated}
      />
      {isAnimated ? <ParticlesComponent isDarkTheme={isDarkTheme} /> : null}
      <section className={style.sectionAbout}>
        <About languageToken={languageToken} />
      </section>
      <section className={style.sectionJourney}>
        <Journey languageToken={languageToken} isAnimated={isAnimated} />
      </section>
      <section className={style.sectionAbilities}>
        <AbilityBuilder languageToken={languageToken} isAnimated={isAnimated} />
      </section>
      <section className={style.sectionProjects}>
        <ProjectBuilder languageToken={languageToken} />
      </section>
      <section className={style.sectionFooter}>
        <Footer languageToken={languageToken} />
      </section>
    </main>
  );
}
