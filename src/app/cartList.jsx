'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import Counter from "./counter";
import CartItem from "./cartItem";

export default function CartList({ onTotalChange }) {
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

    useEffect(() => {
        const initialQty = {};
        products.forEach(product => {
            initialQty[product.id] = 0;
        });
        setQuantities(initialQty);
    }, [products]);

    const updateQuantity = (productId, newQty) => {
        setQuantities(prev => ({...prev, [productId]: newQty
    }));
    };

    const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  
    useEffect(() => {
        if (typeof onTotalChange === "function") {
            onTotalChange(totalItems);
        }
    }, [totalItems, onTotalChange]);

    console.log("Current quantities:", quantities);
    console.log("Total items:", totalItems);


  return (
    <div className="p-4 grid grid-cols-1 gap-4">
      {products.length === 0 ? (
                <span>Loading...</span>
            ) : (
      products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow-sm">
            <CartItem
            product={product} quantity={quantities[product.id] || 0} onChange={(newQty) => updateQuantity(product.id, newQty)}/>
            {/* <Counter quantity={quantities[product.id] || 0} onChange={(newQty) => updateQuantity(product.id, newQty)} /> */}
        </div>
        ))
        )}
    </div>
  );
}
