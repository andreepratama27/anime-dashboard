function App() {
  return (
    <main>
      <nav className="py-4">
        <p className="font-bold text-lg">My Anime List</p>
      </nav>

      <section className="content">
        <div className="content-search">
          <input
            type="text"
            placeholder="Search Anime and more..."
            className="bg-gray-100 w-full p-4 rounded"
          />
        </div>
      </section>

      <section className="main-content my-4">
        <div className="title">
          <p className="font-bold mb-4">Anime Lists</p>
        </div>

        <div className="anime-grid grid grid-cols-3 gap-4">
          {Array(20)
            .fill("")
            .map(() => (
              <div className="grid w-full border">
                <p>First Anime</p>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default App;
