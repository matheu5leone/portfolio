import style from '@/components/journey/journey.module.css'
import Image from 'next/image'
import LanguageToken from '../intl/Languages'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'

interface JourneyProps {
    languageToken: LanguageToken
}

const Journey: React.FC<JourneyProps> = ({ languageToken }) => {

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const xOffset = (x / rect.width - 0.5) * -10;
        const yOffset = (y / rect.height - 0.5) * -10;
    
        target.style.transform = `perspective(1000px) rotateX(${yOffset}deg) rotateY(${xOffset}deg)`;
    };
    
    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    return (
        <div className={style.container}>
            <div className={style.containerSptechAndDock}>
                <div className={style.graduation} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <div className={style.iconAndModule}>
                        <GraduationCap />
                        <p>{languageToken.getTitleGraduation()}</p>
                        <h1 className={style.title}>São Paulo Tech School</h1>
                    </div>
                    <div className={style.imageAndText}>
                        <a href="https://www.sptech.school/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={style.image}
                                src={'/portfolio/sptech.png'}
                                alt='graduation'
                                width={108}
                                height={108}
                            /></a>
                        <div className={style.spans}>
                            <span>{languageToken.getCourse()}</span>
                            <span>{languageToken.getDegree()}</span>
                            <span>2022 - 2024</span>
                        </div>
                    </div>
                </div>
                <div className={style.experience} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                    <div className={style.iconAndModule}>
                        <BriefcaseBusiness />
                        <p>{languageToken.getTitleExperience()}</p>
                        <h1 className={style.title}>Dock Tech</h1>
                    </div>
                    <div className={style.imageAndText}>
                        <a href="https://dock.tech/" target="_blank" rel="noopener noreferrer">
                            <Image
                                className={style.image}
                                src={'/portfolio/dock.png'}
                                alt='experience'
                                width={108}
                                height={108}
                            /></a>
                        <div className={style.spans}>
                            <span>{languageToken.getDockRole()}</span>
                            <span>{languageToken.getDockFunction()}</span>
                            <span>2023 - 2024</span>
                        </div>
                    </div>
                </div>
            </div>
{/*             <div className={style.resume} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <p>{languageToken.getResume()}</p>
            </div> */}
        </div>
    )
}

export default Journey;
