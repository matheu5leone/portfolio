import style from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";
import En from "@/components/intl/En";
import Pt from "@/components/intl/Pt";
import { useState, useMemo } from "react";

export default function Home() {
  const [isEnglish, setLanguage] = useState<boolean>(true);

  const languageToken = useMemo(() => {
    return isEnglish ? new En() : new Pt();
  }, [isEnglish]);

  const switchLanguage = () => setLanguage(!isEnglish);

  return (
    <div className={style.container}>
      <Navbar language={isEnglish} switchLanguage={switchLanguage} languageToken={languageToken} />
      <section className={style.sectionAbout}>
        <About languageToken={languageToken} />
      </section>
    </div>
  );
}
