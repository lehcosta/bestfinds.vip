import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-300 min-h-screen">
      <header className="relatve z-10">
        <nav>
          <div className="bg-gray-900">
            <div className="mx-auto flex py-8 h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 text-white">
              <h1 className="font-bold flex gap-1 text-xl">
                <span>BestFinds</span>
                <span className="px-1 rounded-sm bg-fuchsia-800">VIP</span>
              </h1>
              <nav className="flex gap-5">
                <a href="#">All the finds</a>
                <a href="#">Contact</a>
              </nav>
            </div>
          </div>
        </nav>
      </header>
    </main>
  );
}
