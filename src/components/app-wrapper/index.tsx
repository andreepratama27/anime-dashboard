export default function AppWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <main className="">
      <nav className="fixed top-0 w-full py-4 bg-violet-800">
        <div className="max-w-2xl mx-auto">
          <a href="/" className="text-lg font-bold text-white">
            AnimeTha
          </a>
        </div>
      </nav>

      <div className="container max-w-2xl mx-auto mt-14">{children}</div>
    </main>
  );
}
