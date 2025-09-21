import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


export default function Navbar({ totalItems }) {
    return (
        <nav className="bg-[#701A42] p-4 text-white flex justify-between items-center">
             <h1 className="text-xl font-bold">🛍️ DNAStore</h1>
                <Button variant="ghost" className="relative hover:opacity-80 transition-opacity duration-200">
                    <span className="text-2xl">👜</span>
                    {totalItems > 0 && (
                    <Badge className="absolute -top-0.5 -right-0.5 rounded-full bg-white text-[#701A42] " variant="destructive">{totalItems}</Badge>
                    )}
                </Button>
         </nav>
    );
}