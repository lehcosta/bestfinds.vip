"use client";

import React from "react";
import { track } from "@vercel/analytics";
import { formatMoney } from "@/utils/money";

export const ProductCard = ({
  name,
  slug,
  price,
}: {
  name: string;
  slug: string;
  price: number;
}) => (
  <div className="w-full bg-white">
    <div className="aspect-video"></div>
    <div className="bg-fuchsia-100 px-6 py-3 uppercase text-center font-bold text-sm">
      <h1>{name}</h1>
    </div>
    <div className="grid grid-cols-2">
      <div className="text-center p-3 flex justify-center items-center font-bold text-lg">
        {formatMoney(price)}
      </div>
      <div className="text-center flex p-3">
        <a
          href={`/p/${slug}`}
          className="block flex-1 uppercase font-bold bg-lime-500 py-2 hover:bg-lime-600 transition-colors text-lg"
          onClick={() => {
            track("product-card-clicked", {
              name,
              slug,
            });
          }}
        >
          Pick it
        </a>
      </div>
    </div>
  </div>
);
