import { ThemeProvider } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

import Card from "@/components/CardBlog";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="nav-tags flex w-full items-center justify-center">
          <nav className="w-5/6 flex items-center justify-center sm:justify-between my-2 flex-wrap gap-2">
            <ul className="flex gap-1">
              <li>
                <a href="#">
                  <Badge variant="default">Informatic</Badge>
                </a>
              </li>
              <li>
                <a href="#">
                  <Badge variant="default">Web</Badge>
                </a>
              </li>
              <li>
                <a href="#">
                  <Badge variant="outline">UI/UX</Badge>
                </a>
              </li>
              <li>
                <a href="#">
                  <Badge variant="outline">Cibersecurity</Badge>
                </a>
              </li>
            </ul>
            <div className="search relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Type search..."
                className="w-full appearance-none bg-background pl-8 shadow-none"
              />
            </div>
          </nav>
        </div>
        <div>
          <Card />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
