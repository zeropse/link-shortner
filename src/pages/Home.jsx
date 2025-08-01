import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShortenForm from "../components/ShortenForm";
import ShortenResult from "../components/ShortenResult";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { useState } from "react";
import { ThemeProvider } from "@/style/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundLines } from "@/components/ui/background-lines";

const Home = () => {
  const [shortUrl, setShortUrl] = useState("");

  return (
    <ThemeProvider>
      <Toaster position="top-center" />
      <BackgroundLines
        svgOptions={{ duration: 2 }}
        className="flex flex-col min-h-screen bg-zinc-950"
      >
        <Navbar />
        <main className="flex flex-1 items-center justify-center w-full">
          <BackgroundGradient className="rounded-[22px] p-10 w-full max-w-xl bg-zinc-900">
            <h1 className="text-5xl md:text-6xl font-bold">URL Shortener</h1>
            <p className="text-sm text-gray-600 mt-2">
              Shorten your URLs with ease.
            </p>

            <ShortenForm onShorten={setShortUrl} />
            <ShortenResult shortUrl={shortUrl} />
          </BackgroundGradient>
        </main>
        <Footer />
      </BackgroundLines>
    </ThemeProvider>
  );
};

export default Home;
