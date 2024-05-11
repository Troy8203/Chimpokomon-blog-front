import {
  CircleUser,
  Menu,
  Package2,
  Search,
  SquareMenuIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

import Logo from "@/assets/LogoCtrlDev.svg";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function App() {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center justify-start md:justify-around gap-4 border-b bg-background px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
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
        <div className="w-full md:w-36 flex items-center justify-center md:justify-start md:ml-auto">
          <img
            src={Logo}
            className="ring-offset-background transition-colors bg-secondary hover:bg-secondary/80 p-1 px-7 rounded-md max-h-12"
            alt="Logo CtrlDev"
          />
        </div>
        <nav className="flex-1 hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm md:justify-end lg:gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Home
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            About Us
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            Social
          </a>
          <a href="#" className="text-primary hover:text-foreground">
            Get Started
          </a>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <ModeToggle />
          </ThemeProvider>
        </nav>
      </header>
    </>
  );
}

export default App;
