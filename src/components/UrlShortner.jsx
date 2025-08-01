import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const UrlShortner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <BackgroundGradient className="rounded-[22px] p-10  w-full bg-zinc-900">
        <h1 className="text-5xl md:text-6xl font-bold"> URL Shortner</h1>
        <p className="text-sm text-gray-600 mt-2">
          Shorten your URLs with ease.
        </p>

        <Label className="mt-4">Enter your URL</Label>

        <Input className="mt-4" />
        <Button className="mt-4 w-full cursor-pointer">Shorten</Button>
      </BackgroundGradient>
    </div>
  );
};

export default UrlShortner;
