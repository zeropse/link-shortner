import { Button } from "./ui/button";
import { toast } from "sonner";

const ShortenResult = ({ shortUrl }) => {
  if (!shortUrl) return null;
  return (
    <div className="mt-6 p-4 bg-zinc-800 rounded-lg flex flex-col items-center">
      <span className="text-green-400 font-mono text-lg">{shortUrl}</span>
      <Button
        className="mt-2 text-xs w-full cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(shortUrl);
          toast.success("Short URL copied to clipboard!", {
            style: { background: "#22c55e", color: "#fff" },
            iconTheme: { primary: "#fff", secondary: "#22c55e" },
          });
        }}
      >
        Copy
      </Button>
    </div>
  );
};

export default ShortenResult;
