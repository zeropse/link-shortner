import Footer from "./Footer";
import Navbar from "./Navbar";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UrlShortener = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Navbar />
      <main className="flex flex-1 items-center justify-center w-full">
        <BackgroundGradient className="rounded-[22px] p-10 w-full max-w-xl bg-zinc-900">
          <h1 className="text-5xl md:text-6xl font-bold"> URL Shortener</h1>
          <p className="text-sm text-gray-600 mt-2">
            Shorten your URLs with ease.
          </p>

          <Label className="mt-4">Enter your URL</Label>

          <Input className="mt-4" />
          <Button className="mt-4 w-full cursor-pointer">Shorten</Button>
        </BackgroundGradient>
      </main>
      <Footer />
    </div>
  );
};

export default UrlShortener;
