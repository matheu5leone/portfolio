import style from "@/components/navbar/navbar.module.css";
import { Eclipse, Globe, Play, Pause } from "lucide-react";
import Image from "next/image";
import LanguageToken from "../../util/intl/Languages";

interface NavbarProps {
  switchLanguage: () => void;
  languageToken: LanguageToken;
  changeTheme: () => void; 
  toggleAnimation: () => void; 
  isAnimated: boolean;
}

export default function Navbar({ languageToken, switchLanguage, changeTheme, toggleAnimation, isAnimated }: NavbarProps) {

  return (
    <main className={style.navbar}>
      <button className={style.btnTheme} onClick={toggleAnimation}> 
        {isAnimated ? <Pause className={style.pauseIcon} /> : <Play className={style.playIcon} />} 
      </button>
      <button className={style.btnTheme} onClick={switchLanguage}>
        <div className={style.flagContainer}>
          <Image
            src={languageToken.getBoolean() ? "/portfolio/eua.png" : "/portfolio/brasil.png"}
            alt={languageToken.getBoolean()  ? "EUA" : "Brasil"}
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
