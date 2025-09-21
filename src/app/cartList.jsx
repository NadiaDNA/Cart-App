'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import Counter from "./counter";

export default function CartList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products?limit=5')
//       .then(res => setProducts(res.data))
//       .catch(err => console.error(err));
//   }, []);

//ambil data api pake axios
 const [products, setProducts] = useState([]);

    useEffect(() => {
        getDataProducts();
    }, []);

    const getDataProducts = async () => {
        const { data } = await axios.get("https://fakestoreapi.com/products?limit=5");
        setProducts(data);
    };

    console.log(products);

//masukin quantity
const [quantities, setQuantities] = useState({});
const initialQty ={};
products.forEach(product => {
  initialQty[product.id] = 0;
});
useEffect(() => {
  setQuantities(initialQty);
}, [products]);

const updateQuantity = (productId, newQty) => {
  setQuantities(prev => ({
    ...prev,
    [productId]: newQty
  }));
};


  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {products.length === 0 ? (
                <span>Loading...</span>
            ) : (
      products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow-sm">
          <img src={product.image} alt={product.title} className="h-32 object-contain mb-2" />
          <h3 className="font-bold text-md">{product.title}</h3>
          <p className="text-sm text-gray-600">${product.price}</p>
          <Counter quantity={quantities[product.id] || 0} onChange={(newQty) => updateQuantity(product.id, newQty)} />
        </div>
        ))
        )}
    </div>
  );
}
