'use client';
import { useState, useEffect } from "react";
import Navbar from './navbar'
// import CartList from './cartList'

export default function Home() {
  return (
    <div>
      <Navbar totalItems={0} />
      {/* <CartList /> */}
    </div>
  )
}

