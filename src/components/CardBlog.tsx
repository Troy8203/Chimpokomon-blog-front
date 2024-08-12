import IconCloud from "@/components/magicui/icon-cloud";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";

import { HTMLMotionProps } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "jest",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
];

function CardBlog() {
  return (
    <div className="container-card bg-secondary/20 rounded-md flex py-10 px-14 justify-center items-center">
      <div className="flex flex-col justify-center gap-7 w-3/5">
        <div className="flex flex-col justify-center gap-4 w-4/5">
          <h2 className="text-[2.8em] font-extrabold up">
            Aprende Desarrollo
            <WordRotate
              className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#7420bb] to-[#E6723B] bg-clip-text text-transparent"
              words={[" Web ", " Mobile "]}
            />
            Desde Cero con Nosotros
          </h2>
          <TypingAnimation
            className="text-sm text-justify min-h-20 flex items-center"
            duration={50}
            text="No importa si eres principiante o tienes algo de experiencia,
            nuestro grupo de estudio está diseñado para ayudarte a mejorar tus
            habilidades de desarrollo web. Aprende en un entorno de apoyo,
            resuelve dudas en tiempo real y colabora en proyectos prácticos."
          />
        </div>
        <div>
          <button className="btn">Únete a Nuestro Grupo de Estudio</button>
        </div>
      </div>
      <div className="max-w-80">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}

export default CardBlog;
