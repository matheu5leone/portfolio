import style from '@/components/journey/journey.module.css'
import Image from 'next/image'
import LanguageToken from '../../util/intl/Languages'
import { BriefcaseBusiness, GraduationCap, BookOpenCheck  } from 'lucide-react'
import { handleMouseMove, handleMouseLeave } from "@/util/mouseHandlers"

interface JourneyProps {
    languageToken: LanguageToken,
    isAnimated: boolean;
}

const Journey: React.FC<JourneyProps> = ({ languageToken, isAnimated }) => {

    return (
        <div className={style.container}>
            <span className={style.spanTitle}>
                <span>{languageToken.getKnowMy()}</span>
                <h1>{languageToken.getJourney()}</h1>
                <BookOpenCheck />
            </span>
            <div className={style.containerSptechAndDock}>
                <div className={style.graduation} {...(isAnimated ? { onMouseMove: handleMouseMove(4), onMouseLeave: handleMouseLeave } : {})}>
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
                <div className={style.experience} {...(isAnimated ? { onMouseMove: handleMouseMove(4), onMouseLeave: handleMouseLeave } : {})}>
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
            <div className={style.resume} {...(isAnimated ? { onMouseMove: handleMouseMove(3), onMouseLeave: handleMouseLeave } : {})}>
                <span className={style.resumeImg}>
                    <Image
                        className={style.cmatrix}
                        src="/portfolio/cmatrix.gif"
                        alt={languageToken.getGreetings()}
                        width={400}
                        height={250}
                        priority
                    />
                </span>
                <span className={style.resumeText}><p>{languageToken.getResume()}</p></span>
            </div>
        </div>
    )
}

export default Journey;
