import IconCloud from "@/components/magicui/icon-cloud";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";

import { Button } from "@/components/ui/button";

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
      <div className="flex flex-col justify-center gap-5 w-3/5">
        <div className="flex flex-col justify-center gap-4 w-4/5">
          <h2 className="text-[2.8em] font-extrabold up">
            Aprende Desarrollo
            <WordRotate
              className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-purple-700 to-red-damask-700 bg-clip-text text-transparent"
              words={[" Web ", " Mobile "]}
            />
            <span className="text-3xl line-clamp-1">
              Desde Cero con Nosotros
            </span>
          </h2>
          <TypingAnimation
            className="text-sm text-justify min-h-20 flex items-center"
            duration={10}
            text="No importa si eres principiante o tienes algo de experiencia,
            nuestro grupo de estudio está diseñado para ayudarte a mejorar tus
            habilidades de desarrollo web. Aprende en un entorno de apoyo,
            resuelve dudas en tiempo real y colabora en proyectos prácticos."
          />
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="link"
            className="bg-gradient-to-r hover:from-purple-500 hover:to-red-damask-500 from-purple-700 to-red-damask-700  font-bold transition-all duration-500 ease-in-out text-white hover:text-background"
          >
            Comienza Hoy
          </Button>

          <Button variant="outline">Más Información</Button>
        </div>
      </div>
      <div className="max-w-80">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}

export default CardBlog;
