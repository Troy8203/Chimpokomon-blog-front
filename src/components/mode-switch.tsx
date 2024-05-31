import { Moon, Sun } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

import { useTheme } from "@/components/theme-provider";
import { useState } from "react";

export function ModeSwitch() {
  const { setTheme } = useTheme();

  const [flag, setFlag] = useState<boolean>(false);

  return (
    <>
      <div className="flex items-center gap-1">
        <Switch
          id="dark-mode"
          className="dark:bg-primary"
          onCheckedChange={() => {
            setFlag(!flag);
            flag ? setTheme("light") : setTheme("dark");
          }}
        />
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </>
  );
}
