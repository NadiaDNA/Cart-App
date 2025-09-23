// import { Button } from "@/components/ui/button";

// export default function Counter({ quantity = 0, onChange }) {
//        const increment = () => {
//         if (typeof onChange === 'function') {
//             onChange(quantity + 1);
//         }
//     };

//     const decrement = () => {
//         if (typeof onChange === 'function' && quantity > 0) {
//             onChange(quantity - 1);
//         }
//     }

//     return (
//         // <div className="flex items-center gap-4">
//         <div className="flex items-center gap-2 justify-center">
//                 <Button onClick={decrement} size='sm' variant="outline" className="border-[#701a42] text-[#701a42] hover:bg-[#701a42]/10" disabled={!onChange || quantity <= 0}>-</Button>
//             <span className="min-w-[24px] text-center">{quantity}</span>
//                 <Button onClick={increment} size='sm' variant="outline" className="border-[#701a42] text-[#701a42] hover:bg-[#701a42]/10" disabled={!onChange}>+</Button>
//          </div>
//     );
// }

'use client';
import { useCartStore } from "./store/cartStore";
import { Button } from "@/components/ui/button";

export default function Counter({ productId }) {
  const quantity = useCartStore((state) => state.quantities[productId] || 0);
  const setQuantity = useCartStore((state) => state.setQuantity);
  const updateTotal = useCartStore((state) => state.updateTotal);

  const increment = () => {
    setQuantity(productId, quantity + 1);
    updateTotal();
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(productId, quantity - 1);
      updateTotal();
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button onClick={decrement} size='sm' variant="outline" className="border-[#701a42] bg-pink-100 text-[#701a42] hover:bg-[#701a42]/20" disabled={quantity <= 0}>-</Button>
      <span>{quantity}</span>
      <Button onClick={increment} size='sm' variant="outline" className="border-[#701a42] bg-pink-100 text-[#701a42] hover:bg-[#701a42]/20">+</Button>
    </div>
  );
}
