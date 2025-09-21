'use client';
import Counter from "./counter";

export default function CartItem({ product, quantity =0, onChange }) {
    const subTotal = (product.price * quantity).toFixed(2);

    return (
    <div className="bg-white border p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-lg transition-shadow duration-200">
        <div className="flex items-center gap-4 w-full sm:w-auto">
            <img src={product.image} alt={product.title} className="h-24 w-24 object-contain bg-gray-50 rounded p2" />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-base text-gray-800">{product.title}</h3>
                    <p className="text-sm text-gray-600">$ {product.price}</p>
                </div>
        </div>

        <div className="flex items-center gap-6 justify-between sm:justify-end w-full sm:w-auto">
            <Counter quantity={quantity} onChange={onChange} />
            <div className="font-bold text-[#701A42]">$ {subTotal}</div>
        </div>
    </div>
    );
}