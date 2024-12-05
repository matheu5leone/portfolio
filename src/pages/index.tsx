import style from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/about/About";

export default function Home() {



  return (
    <div className={style.container}>
      <Navbar />
      <section className={style.sectionAbout}>
      <About />
      </section>
    </div>
  );
}
