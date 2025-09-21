import { Button } from "@/components/ui/button";

export default function Counter({ quantity = 0, onChange }) {
       const increment = () => {
        if (typeof onChange === 'function') {
            onChange(quantity + 1);
        }
    };

    const decrement = () => {
        if (typeof onChange === 'function' && quantity > 0) {
            onChange(quantity - 1);
        }
    }

    return (
        <div className="flex items-center gap-2 mt-2">
            <Button onClick={decrement} size='sm' variant="outline" disabled={!onChange || quantity <= 0}>-</Button>
            <span>{quantity}</span>
            <Button onClick={increment} size='sm' variant="outline" disabled={!onChange}>+</Button>
        </div>
    );
}