import style from "@/components/navbar/navbar.module.css";
import { useEffect, useState } from "react";
import { Eclipse, Globe } from "lucide-react";
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
import { usePathname } from 'next/navigation'; // Importando usePathname
import Image from "next/image"; // Importando o componente Image do Next.js

export default function Navbar() {
  const [theme, setTheme] = useState<string | null>(null);
  const { formatMessage } = useIntl();
  const { locale, push } = useRouter();
  const pathname = usePathname(); // Pegando o caminho atual da URL

  // Usando um booleano para controlar o idioma
  const isEnglish = locale === 'en';

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.toggle("dark-theme", savedTheme === "dark");
  }, []);

  const changeTheme = () => {
    if (theme) {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.body.classList.toggle("dark-theme", newTheme === "dark");
      localStorage.setItem("theme", newTheme);
    }
  };

  const switchLanguage = () => {
    // Definindo o novo idioma
    const newLang = isEnglish ? 'pt' : 'en';

    // Redirecionando para o mesmo caminho, mas com o novo idioma
    push(pathname, undefined, { locale: newLang });
  };

  return (
    <main className={style.navbar}>
      <h1>{formatMessage({ id: 'hello' })}</h1>
      <button className={style.btnTheme} onClick={switchLanguage}>
        {/* Contêiner para a imagem e ícone */}
        <div className={style.flagContainer}>
          <Image
            src={isEnglish ? "/portfolio/eua.png" : "/portfolio/brasil.png"} // Troca entre as bandeiras
            alt={isEnglish ? "EUA" : "Brasil"}
            width={30} // Tamanho ajustável
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
