// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";


// export default function Navbar({ totalItems }) {
//     return (
//         <nav className="bg-[#701A42] p-4 text-white flex justify-between items-center">
//              <h1 className="text-xl font-bold">🛍️ DNAStore</h1>
//                 <Button variant="ghost" className="relative hover:opacity-80 transition-opacity duration-200">
//                     <span className="text-2xl">👜</span>
//                     {totalItems > 0 && (
//                     <Badge className="absolute -top-0.5 -right-0.5 rounded-full bg-white text-[#701A42] " variant="destructive">{totalItems}</Badge>
//                     )}
//                 </Button>
//          </nav>
//     );
// }


import { useCartStore } from './store/cartStore';
import { Badge } from "@/components/ui/badge";
import { Handbag } from 'lucide-react';
import { Store } from 'lucide-react';


export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems);

  return (
    <nav className="bg-[#701A42] p-4 text-white flex justify-between items-center">
      {/* <h1 className="text-xl font-bold">🛍️ DNAStore</h1> */}
        <div className="flex items-center gap-2 ml-2">
            <Store size={30} />
            <h1 className='text-2xl'><span className="text-2xl font-bold">DNA_</span>Store</h1>
        </div>
      <div variant="ghost" className="h-auto w-auto mr-3 relative hover:opacity-80 transition-opacity duration-200">
        {/* <span className="text-2xl">👜</span> */}
        <Handbag size={30} />
        {totalItems > 0 && (
          <Badge className="absolute -top-2 -right-4 rounded-full bg-white text-[#701A42]" variant="destructive">
            {totalItems}
          </Badge>
        )}
      </div>
    </nav>
  );
}
