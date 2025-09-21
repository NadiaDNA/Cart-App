'use client';
import { useState } from "react";
import Navbar from './navbar'
import CartList from './cartList'


export default function Home() {
  const [totalItems, setTotalItems] = useState(0);
  return (
    <div>
      <Navbar totalItems={totalItems} />
      <CartList onTotalChange={setTotalItems} />
    </div>
  )
}

