import { Button } from "@/components/ui/button";

export default function Counter({ quantity, onChange }) {
    if (!onChange) return null;

    const increment = () => {
        if (onChange) onChange(quantity + 1);
    };
    const decrement = () => {
        if (quantity > 0)
        onChange(quantity - 1);
    }

    return (
        <div className="flex items-center gap-2 mt-2">
            <Button onClick={decrement} size='sm' variant="outline">-</Button>
            <span>{quantity}</span>
            <Button onClick={increment} size='sm' variant="outline">+</Button>
        </div>
    );
}