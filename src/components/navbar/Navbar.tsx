import style from "@/components/navbar/navbar.module.css";
import { Eclipse, Globe } from "lucide-react";
import Image from "next/image";

interface LanguageToken {
  getHello: () => string;
}

interface NavbarProps {
  language: boolean;
  switchLanguage: () => void;
  languageToken: LanguageToken;
  changeTheme: () => void; 
}

export default function Navbar({ language, switchLanguage, changeTheme }: NavbarProps) {
  const isEnglish = language;

  return (
    <main className={style.navbar}>
      {/* <h1>{languageToken.getHello()}</h1> */}
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
