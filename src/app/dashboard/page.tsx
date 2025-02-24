export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="font-bold text-center text-lg sm:text-2xl">
        Masuk ke Dashboard Admin
      </h1>
      <main>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-4 font-bold text-lg sm:text-xl">Masuk</h1>
          <form className="flex flex-col items-center justify-center gap-4">
            <input
              placeholder="Email Address"
              type="email"
              className="text-black p-2 rounded-md placeholder:text-gray-400 focus:outline-none"
            />
            <input
              placeholder="Password"
              type="password"
              className="text-black p-2 rounded-md placeholder:text-gray-400 focus:outline-none"
            />
          </form>
          <button className="mt-8 bg-blue-600 p-2 rounded-md border-white border-2">
            Masuk
          </button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>
          Project by <a href="https://www.x.com/picupiee">PicuPiee</a> for RT
          003
        </h1>
      </footer>
    </div>
  );
}
