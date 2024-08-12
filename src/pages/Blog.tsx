import { ThemeProvider } from "@/components/theme-provider";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

import Card from "@/components/CardBlog";

function App() {
  return (
    <div className="mx-6 my-4">
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
