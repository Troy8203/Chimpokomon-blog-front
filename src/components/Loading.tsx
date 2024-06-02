import Logo from "@/assets/Logo.svg";

function Loading() {
  return (
    <div className="w-full min-h-96 flex flex-col items-center justify-center">
      <div className="w-28 animate-bounce">
        <img
          src={Logo}
          className="ring-offset-background rounded-md h-full w-auto"
          alt="Logo CtrlDev"
        />
      </div>
      <p className="text-2xl md:text-3xl font-bold text-muted-foreground">
        Cargando...
      </p>
    </div>
  );
}

export default Loading;
