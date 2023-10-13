import React from "react";

export const ProductCard = () => (
  <div className="w-full bg-white">
    <div className="aspect-video"></div>
    <div className="bg-fuchsia-100 px-6 py-3 uppercase text-center font-bold text-sm">
      <h1>Product Card</h1>
    </div>
    <div className="grid grid-cols-2">
      <div className="text-center p-3 flex justify-center items-center font-bold text-lg">
        $ 10,00
      </div>
      <div className="text-center flex p-3">
        <a
          href="#"
          className="block flex-1 uppercase font-bold bg-lime-500 py-2 hover:bg-lime-600 transition-colors text-lg"
        >
          Pick it
        </a>
      </div>
    </div>
  </div>
);
