import { ThemeProvider } from "@/style/theme-provider";
import { BackgroundLines } from "@/components/ui/background-lines";
import UrlShortener from "@/components/UrlShortener";

const App = () => {
  return (
    <ThemeProvider>
      <BackgroundLines svgOptions={{ duration: 2 }}>
        <UrlShortener />
      </BackgroundLines>
    </ThemeProvider>
  );
};

export default App;
