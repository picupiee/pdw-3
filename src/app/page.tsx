import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="p-2 flex-1 items-center justify-items-center">
        <h1 className="font-semibold text-xl sm:text-3xl">
          Portal Digital Warga RT 003
        </h1>
      </header>
      <main className="p-4">
        <h1 className="text-xl font-bold sm:text-2xl">Selamat datang</h1>
        <div className="flex flex-wrap justify-evenly mt-10 gap-y-4">
          <Link href="/summary">
            <div className="bg-gray-400 rounded-md border-white border-2 p-2 w-[150px] h-[150px] flex flex-col items-center justify-center">
              <h1 className="text-center">Ringkasan Data Warga</h1>
            </div>
          </Link>
          <div className="bg-gray-400 rounded-md border-white border-2 p-2 w-[150px] h-[150px] flex flex-col items-center justify-center">
            <h1 className="text-center">Cari Data</h1>
          </div>
          <div className="bg-gray-400 rounded-md border-white border-2 p-2 w-[150px] h-[150px] flex flex-col items-center justify-center">
            <h1 className="text-center">Lapor Tamu</h1>
          </div>
          <div className="bg-gray-400 rounded-md border-white border-2 p-2 w-[150px] h-[150px] flex flex-col items-center justify-center">
            <h1 className="text-center">Entri / Update Data Warga</h1>
          </div>
          <Link href="/dashboard">
            <div className="bg-blue-400 rounded-md border-white border-2 p-2 w-[150px] h-[80px] flex flex-col items-center justify-center">
              <h1 className="text-center">Dashboard Admin</h1>
            </div>
          </Link>
        </div>
      </main>
      <footer className="absolute bottom-0 right-0 left-0 sm:bottom-4 p-2">
        <h1 className="font-semibold text-xs sm:text-sm text-center">
          Project by <a href="https://www.x.com/picupiee">PicuPiee</a> for RT
          003
        </h1>
      </footer>
    </div>
  );
}
