'use client';

import { useCartStore } from './store/cartStore';

export default function TotalPrice({ products }) {
  const quantities = useCartStore((state) => state.quantities);

  // Hitung total harga
  const totalPrice = products.reduce((sum, product) => {
    const qty = quantities[product.id] || 0;
    return sum + product.price * qty;
  }, 0);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#701A42] border-t p-4 shadow-lg flex justify-between items-center z-50">
      <div className="mx-5 text-xl font-bold text-white flex items-center gap-5">
        Total Harga: 
        <h1>$ {totalPrice.toFixed(2)}</h1>
      </div>
      <button className="bg-pink-50 text-[#701A42] font-bold px-4 py-2 rounded shadow hover:bg-pink-200 transition-colors duration-200">
        Beli
      </button>
    </div>
  );
}