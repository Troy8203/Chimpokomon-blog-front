import IconCloud from "@/components/magicui/icon-cloud";
import TypingAnimation from "@/components/magicui/typing-animation";
import WordRotate from "@/components/magicui/word-rotate";

import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";

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
    <div className="container-card bg-secondary/20 rounded-md flex flex-col md:flex-row py-10 px-5 md:px-14 justify-center items-center overflow-hidden relative">
      <div className="flex flex-col justify-center gap-0 md:gap-5 md:w-3/5">
        <div className="flex flex-col justify-center gap-4 md:w-4/5">
          <h2 className="text-center md:text-left text-xl sm:text-3xl md:text-[2.5rem] font-extrabold up">
            Aprende Desarrollo
            <WordRotate
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-purple-700 to-red-damask-700 bg-clip-text text-transparent"
              words={[" Web ", " Mobile "]}
            />
            <span className="lg:text-[.7em] line-clamp-none">
              Desde Cero con Nosotros
            </span>
          </h2>
          <TypingAnimation
            className="text-xs md:text-sm text-justify min-h-20 md:flex items-center"
            duration={10}
            text="No importa si eres principiante o tienes algo de experiencia, nuestro grupo de estudio está diseñado para ayudarte a mejorar tus habilidades de desarrollo web. Aprende en un entorno de apoyo, resuelve dudas en tiempo real y colabora en proyectos prácticos."
          />
        </div>
        <div className="flex items-center gap-2 justify-center md:justify-start my-5 md:my-0">
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
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "lg:[mask-image:radial-gradient(1024px_circle_at_right,white,transparent)]",
          "[mask-image:radial-gradient(500px_circle_at_right,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}

export default CardBlog;
