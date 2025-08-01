import { ThemeProvider } from "@/style/theme-provider";
import UrlShortner from "./components/UrlShortner";

const App = () => {
  return (
    <ThemeProvider>
      <UrlShortner />
    </ThemeProvider>
  );
};

export default App;
