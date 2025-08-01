import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast } from "sonner";

function generateShortUrl(inputUrl) {
  let hash = 0;
  for (let i = 0; i < inputUrl.length; i++) {
    hash = (hash << 5) - hash + inputUrl.charCodeAt(i);
    hash |= 0;
  }
  const code = Math.abs(hash).toString(36).substring(0, 8);
  return code;
}

const ShortenForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleShorten = async () => {
    const trimmed = url.trim();
    if (!trimmed) {
      toast.error("Please enter a URL.", {
        style: { background: "#dc2626", color: "#fff" },
        iconTheme: { primary: "#fff", secondary: "#dc2626" },
      });
      return;
    }
    let valid = false;
    let urlToSave = trimmed;
    let urlForValidation = trimmed;
    if (!/^\w+:\/\//.test(trimmed)) {
      urlForValidation = "https://" + trimmed;
    }
    try {
      const u = new URL(urlForValidation);
      valid = !!u.protocol && !!u.host;
      urlToSave = u.href;
    } catch {
      valid = false;
    }
    if (!valid) {
      toast.error("Please enter a valid URL.", {
        style: { background: "#dc2626", color: "#fff" },
        iconTheme: { primary: "#fff", secondary: "#dc2626" },
      });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const code = generateShortUrl(urlToSave);
      const mappings = JSON.parse(localStorage.getItem("urlMappings") || "{}");
      mappings[code] = urlToSave;
      localStorage.setItem("urlMappings", JSON.stringify(mappings));
      const short = `${window.location.origin}/${code}`;
      setLoading(false);
      setUrl("");
      onShorten(short);
    }, 500);
  };

  return (
    <div>
      <Label className="mt-4" htmlFor="url-input">
        Enter your URL
      </Label>
      <Input
        id="url-input"
        type="url"
        className="mt-4"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        disabled={loading}
        autoFocus
      />
      <Button
        className="mt-4 w-full cursor-pointer"
        onClick={handleShorten}
        disabled={loading}
      >
        {loading ? "Shortening..." : "Shorten"}
      </Button>
    </div>
  );
};

export default ShortenForm;
