'use client';
import Counter from "./counter";

export default function CartItem({ product, quantity =0, onChange }) {
    const subTotal = (product.price * quantity).toFixed(2);

    return (
    <div className="border p-4 rounded shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-4">
            <img src={product.image} alt={product.title} className="h-20 w-20 object-contain" />
                <div>
                    <h3 className="font-bold text-md">{product.title}</h3>
                    <p className="text-sm text-gray-600">$ {product.price}</p>
                </div>
        </div>

        <div className="flex items-center gap-4">
            <Counter quantity={quantity} onChange={onChange} />
            <div className="font-bold">$ {subTotal}</div>
        </div>
    </div>
    );
}