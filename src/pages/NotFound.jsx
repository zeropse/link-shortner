import { ThemeProvider } from "../style/theme-provider";
import { BackgroundLines } from "../components/ui/background-lines";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found";
  }, []);

  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <ThemeProvider>
      <BackgroundLines svgOptions={{ duration: 2 }} className="z-0">
        <div className="flex flex-col items-center justify-center min-h-screen z-10 relative">
          <h1 className="text-4xl font-bold mb-4">404 | Page Not Found</h1>
          <p className="text-lg text-gray-400">
            {" "}
            The page you are looking for does not exist.
          </p>
          <Button
            onClick={handleGoHome}
            className="mt-6 cursor-pointer px-4 py-2 rounded-md"
          >
            Go back to the home page
          </Button>
        </div>
      </BackgroundLines>
    </ThemeProvider>
  );
};

export default NotFound;
