import React from 'react';
import style from './footer.module.css';
import { Linkedin, Github, Mail, FileText } from 'lucide-react';
import LanguageToken from '@/util/intl/Languages';

interface FooterProps {
  languageToken: LanguageToken
}

const Footer: React.FC<FooterProps> = ({ languageToken }) => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.gradient} />
      <div className={style.footerContent}>
        <div className={style.footerSection}>
          <h4 className={style.footerTitle}>{languageToken.getContactMe()}</h4>
          <div className={style.socialLinks}>
            <a href="mailto:matheus.leone.sp@outlook.com" target="_blank" rel="noopener noreferrer">
              <Mail className={style.socialIcon} />
            </a>
            <a href="https://www.linkedin.com/in/matheus-leone-sp/" target="_blank" rel="noopener noreferrer">
              <Linkedin className={style.socialIcon} />
            </a>
            <a href="https://github.com/matheu5leone" target="_blank" rel="noopener noreferrer">
              <Github className={style.socialIcon} />
            </a>
          </div>
        </div>
        <div className={style.footerSection}>
          <div className={style.footerLinks}>
            <a href=
              {(languageToken.getBoolean() ? "/portfolio/docs/cv-matheus-leone-silva-en.pdf" : "/portfolio/docs/cv-matheus-leone-silva-pt.pdf")}
              download className={style.downloadCv}>
              <FileText  />
              {(languageToken.getCV())}
            </a>
            {/* 
            <a href="#journey" className={style.footerLink}>Minha Jornada</a>
            <a href="#projects" className={style.footerLink}>Projetos</a>
            <a href="#contact" className={style.footerLink}>Contato</a> 
            */}
          </div>
        </div>
        <div className={style.footerSection}>
          <p className={style.footerText}>{(languageToken.getDevelopedBy())} <strong>Matheus Leone</strong></p>
          <p className={style.footerText}>&copy; {new Date().getFullYear()} {(languageToken.getAllRightsReserved())}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;