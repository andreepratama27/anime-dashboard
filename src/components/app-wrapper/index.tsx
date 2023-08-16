export default function AppWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <main className="">
      <nav className="fixed top-0 z-10 w-full py-4 bg-[#471f81]">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          <a href="/" className="text-lg font-bold text-white">
            AnimeKu
          </a>

          <div className="navbar-right">
            <ul className="flex gap-6">
              <li>
                <a href="/search" className="text-white">
                  Search
                </a>
              </li>
              <li>
                <a href="/favorite" className="text-white">
                  Favorite
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container max-w-2xl mx-auto mt-14">{children}</div>
    </main>
  );
}
