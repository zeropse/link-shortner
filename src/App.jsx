const App = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <form>
        <label htmlFor="url">URL</label>
        <input type="text" id="url" name="url" />
        <button type="submit">Shorten</button>
      </form>
    </div>
  );
};

export default App;
