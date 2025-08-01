const Navbar = () => {
  return (
    <header className="flex items-center justify-center w-full h-16 px-6 py-2 shadow-md">
      <img src="/android-chrome-512x512.png" alt="Logo" className="h-10 mr-3" />
      <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
        URL Shortener
      </h1>
    </header>
  );
};

export default Navbar;
