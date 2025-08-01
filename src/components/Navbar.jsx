import packageJson from "../../package.json";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center w-full h-16 px-6 py-2 shadow-md">
      <img src="/android-chrome-512x512.png" alt="Logo" className="h-10 mr-3" />
      <div className="flex flex-col justify-center h-full">
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
          URL Shortener
        </h1>
        <span className="text-xs text-muted-foreground font-mono self-end mt-auto">
          v{packageJson.version}
        </span>
      </div>
    </header>
  );
};

export default Navbar;
