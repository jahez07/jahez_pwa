import Image from "next/image";
import { styles } from "./style";

export default function Home() {
  return (
    <section className="relative w-full h-screen mx-auto bg-hero-pattern">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eef] items-start" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm&nbsp;
            <span className="text-[#915eef]">Jahez</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am an AI Software Engineer <br className="sm:block hidden"/> and Machine Learning Researcher
          </p>
        </div>
      </div>
    </section>
  );
}
