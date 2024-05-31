import { Menu, SquareMenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { ThemeProvider } from "@/components/theme-provider";
import { ModeSwitch } from "@/components/mode-switch";

import Logo from "@/assets/Logo.svg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Navbar() {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center justify-between gap-1 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-foreground"
              >
                <SquareMenuIcon className="h-8 w-8" />
                Menu
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Social
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Get Started
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <a
          href="#"
          className="flex items-center transition-colors hover:bg-secondary/80 gap-2 px-2 rounded"
        >
          <div className="w-14">
            <img
              src={Logo}
              className="ring-offset-background rounded-md h-full w-auto"
              alt="Logo CtrlDev"
            />
          </div>
          <h2 className="uppercase font-black text-sm md:text-2xl lg:text-sm w-28 md:w-auto lg:w-28">
            El diario del chimpokomon
          </h2>
        </a>
        <nav className="flex-1 hidden flex-col gap-6 text-lg font-medium lg:flex md:flex-row md:items-center md:gap-5 md:text-sm md:justify-end lg:gap-1">
          {/* <a href="#" className="text-muted-foreground hover:text-foreground">
            Home
          </a> 
          <Avatar>
            <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          */}
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <ModeSwitch />
          </ThemeProvider>
        </nav>
        <Avatar className="h-[1.8rem] w-[1.8rem]">
          <AvatarImage src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </header>
    </>
  );
}

export default Navbar;
