import { ProductCard } from "@/components/ProductCard";

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

export default function Product() {
  return (
    <>
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
