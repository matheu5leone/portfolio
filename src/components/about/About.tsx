import style from "@/components/about/about.module.css";
import Image from "next/image";

export default function About() {

    const WORLD = process.env.NEXT_PUBLIC_WORLD;

    return (
        <main className={style.container}>
            <div className={style.modules}>
                <div className={style.avatarModule}>
                    <div className={style.avatarBox}>
                        <Image
                            className={style.avatar}
                            src="/profilePic.png"
                            alt="Matheus Leone"
                            width={217}
                            height={245}
                            priority
                        />
                    </div>
                    <b className={style.container}>{WORLD}</b>
                </div>
                <div className={style.textModule}>
                    {/*  <b className={style.container}>{WORLD}</b> */}
                </div>
            </div>
        </main>
    );

}