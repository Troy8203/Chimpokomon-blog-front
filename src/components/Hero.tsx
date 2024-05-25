import { LaptopMinimal } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <>
      <div className="container-hero bg-[url('./src/assets/img/BannerLight.webp')] dark:bg-[url('./src/assets/img/BannerDark.webp')] bg-cover bg-center min-h-[30rem] p-3 flex justify-center items-center">
        <div className="content-hero backdrop-blur-sm bg-background/50  dark:bg-background/80 p-7 rounded-md max-w-lg flex flex-col items-center gap-5">
          <div className="icon">
            <LaptopMinimal className="h-10 w-10 text-primary" />
          </div>
          <div className="container-title flex flex-col items-center">
            <div className="sub-title text-sm text-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta.
            </div>
            <div className="title text-primary text-3xl font-bold">
              Lorem ipsum dolor
            </div>
          </div>
          <p className="description text-sm text-muted-foreground text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            illum laudantium sapiente est magni minus. Non voluptatum saepe
            magni eveniet?
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
