import { useEffect, useMemo, useState } from "react";
import style from "@/styles/Home.module.css";
import ParticlesComponent from "@/components/particles/ParticlesComponent";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import En from "@/components/intl/En";
import Pt from "@/components/intl/Pt";

export default function Home() {
  const [isEnglish, setLanguage] = useState<boolean>(true);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

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

  return (
    <div className={style.container}>
      <Navbar language={isEnglish} switchLanguage={switchLanguage} languageToken={languageToken} changeTheme={changeTheme} />
      <ParticlesComponent isDarkTheme={isDarkTheme} />
      <section className={style.sectionAbout}>
        <About languageToken={languageToken} />
      </section>
    </div>
  );
}
