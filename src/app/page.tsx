import { GalleryGrid } from "@/components/GalleryGrid";
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";

const products = [
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
  {
    name: "Xiaomi Redmi Note 9 Pro",
    slug: "xiaomi-redmi-note-9-pro",
    price: 199,
  },
];

const fakeImages = Array.from({ length: 24 }, (_, k) => k + 1).map(
  (_, index) => ({
    src: `https://picsum.photos/20${index}`,
  })
);

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="mx-auto py-8 max-w-7xl flex flex-col gap-7 md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl md:text-5xl flex-auto max-w-lg md:leading-tight">
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
          <GalleryGrid images={fakeImages} />
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

      <div className="pb-28">
        <div className="mx-auto py-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                slug={product.slug}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
