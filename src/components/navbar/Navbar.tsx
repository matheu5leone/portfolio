import style from "@/components/navbar/navbar.module.css";
import { Eclipse, Globe, Play, Pause } from "lucide-react";
import Image from "next/image";

interface LanguageToken {
  getHello: () => string;
}

interface NavbarProps {
  language: boolean;
  switchLanguage: () => void;
  languageToken: LanguageToken;
  changeTheme: () => void; 
  toggleAnimation: () => void; 
  isAnimated: boolean;
}

export default function Navbar({ language, switchLanguage, changeTheme, toggleAnimation, isAnimated }: NavbarProps) {
  const isEnglish = language;

  return (
    <main className={style.navbar}>
      <button className={style.btnTheme} onClick={toggleAnimation}> 
        {isAnimated ? <Pause className={style.pauseIcon} /> : <Play className={style.playIcon} />} 
      </button>
      <button className={style.btnTheme} onClick={switchLanguage}>
        <div className={style.flagContainer}>
          <Image
            src={isEnglish ? "/portfolio/eua.png" : "/portfolio/brasil.png"}
            alt={isEnglish ? "EUA" : "Brasil"}
            width={30}
            height={30}
            className={style.flagImage}
          />
          <Globe className={style.globeIcon} />
        </div>
      </button>
      <button className={style.btnTheme} onClick={changeTheme}>
        <Eclipse />
      </button>

    </main>
  );
}
