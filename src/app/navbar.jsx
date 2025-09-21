import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function Navbar({ totalItems }) {
    return (
        <nav className="bg-[#701A42] p-4 text-white flex justify-between items-center">
             <h1 className="text-xl font-bold">🛍️ DNAStore</h1>
                <Button variant="ghost" className="relative">
                    <span className="text-2xl">👜</span>
                    {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2">{totalItems}</Badge>
                    )}
                </Button>
         </nav>
    );
}