// 'use client';
// import Counter from "./counter";

// export default function CartItem({ product, quantity =0, onChange }) {
//     const subTotal = (product.price * quantity).toFixed(2);

//     return (
//      <div className="bg-white border p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-200">
//         <div className="flex items-center gap-4 w-full sm:w-auto">
//             <img src={product.image} alt={product.title} className="h-20 w-20 object-contain bg-gray-50 rounded p-2" />
//                 <div className="flex flex-col gap-1">
//                     <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 leading-tight min-h-[40px]">{product.title}</h3>
//                     <div className="flex flex-col gap-0">
//                         <p className="text-sm text-gray-500">Stock: {product.rating?.count || 0} </p>
//                         <p className="text-sm text-gray-500">Rating: {product.rating?.rate || 0} ⭐</p>
//                     </div>
//                 </div>
//         </div>
//         <div className="grid grid-cols-3 gap-8 w-full sm:w-auto text-center sm:text-left ">
//             <h3 className="text-base text-gray-600">${product.price}</h3>
//             <Counter quantity={quantity} onChange={onChange} />
//             <h3 className="font-bold text-[#701A42]">${subTotal}</h3>
//         </div>
//     </div>
//     );
// }

'use client';
import { useCartStore } from "./store/cartStore";
import Counter from "./counter";

export default function CartItem({ product }) {
  const quantity = useCartStore((state) => state.quantities[product.id] || 0);
  const subTotal = (product.price * quantity).toFixed(2);

    return (
<div className="bg-pink-100 border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow shadow-gray-300 duration-200 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
  {/* Kiri: Gambar + Info */}
  <div className="flex gap-4 items-start sm:flex-1">
    <img
      src={product.image}
      alt={product.title}
      className="h-20 w-20 object-contain bg-pink-100 border rounded-2xl p-2 shadow transition-shadow duration-200"
    />
    <div className="flex flex-col justify-between flex-1">
      <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 leading-tight min-h-[40px]">
        {product.title}
      </h3>
      <p className="text-sm text-gray-500">Stock: {product.rating?.count || 0}</p>
      <p className="text-sm text-gray-500">Rating: {product.rating?.rate || 0} ⭐</p>
    </div>
  </div>

  {/* Kanan: Harga + Counter + Total */}
  <div className="grid grid-cols-3 gap-4 items-center w-full sm:w-[40%]">
    <div className="text-base text-gray-600 text-center">${product.price}</div>

    <div className="flex justify-center">
      <Counter productId={product.id} />
    </div>

    <h3 className="font-bold text-[#701A42] text-center">${subTotal}</h3>
  </div>
</div>
    )
}