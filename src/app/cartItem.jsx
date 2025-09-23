'use client';
import Counter from "./counter";

export default function CartItem({ product, quantity =0, onChange }) {
    const subTotal = (product.price * quantity).toFixed(2);

    return (
     <div className="bg-white border p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-4 w-full sm:w-auto">
            <img src={product.image} alt={product.title} className="h-20 w-20 object-contain bg-gray-50 rounded p-2" />
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold text-sm text-gray-800 line-clamp-2 leading-tight min-h-[40px]">{product.title}</h3>
                    <div className="flex flex-col gap-0">
                        <p className="text-sm text-gray-500">Stock: {product.rating?.count || 0} </p>
                        <p className="text-sm text-gray-500">Rating: {product.rating?.rate || 0} ⭐</p>
                    </div>
                </div>
        </div>
        <div className="grid grid-cols-3 gap-8 w-full sm:w-auto text-center sm:text-left ">
            <h3 className="text-base text-gray-600">${product.price}</h3>
            <Counter quantity={quantity} onChange={onChange} />
            <h3 className="font-bold text-[#701A42]">${subTotal}</h3>
        </div>
    </div>
    

    );
}