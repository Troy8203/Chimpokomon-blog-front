import Hero from "./components/Hero";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <div>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Hero />
      </ThemeProvider>
    </div>
  );
}

export default App;
