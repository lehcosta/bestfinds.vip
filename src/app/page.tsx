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
                <a href="#" className="">
                  {" "}
                  All the finds
                </a>
                <a href="#" className="">
                  {" "}
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </nav>
      </header>
      <div className="bg-gray-900 text-white">
        <div className="mx-auto py-8 max-w-7xl flex flex-col gap-7 md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl md:text-4xl flex-auto max-w-md leading-tight">
              The Best Hand-Picked Deals from{" "}
              <span
                style={{
                  color: "#d1451c",
                }}
              >
                AliExpress
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
            {Array.from({ length: 12 }, (_, k) => k + 1).map((_, index) => (
              <div
                className={`w-28 h-24 bg-green-100 rounded-xl ${
                  index >= 6 ? "hidden md:block" : ""
                }`}
                key={index}
              >
                1
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-gray-900 h-16 md:h-24"></div>
        <div className="mx-auto max-w-7xl flex flex-col gap-7 md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="bg-white w-full overflow-hidden py-12 rounded-xl mt-[-60px] shadow-sm flex items-center justify-center">
            <h1>teste</h1>
          </div>
        </div>
      </div>
    </main>
  );
}
