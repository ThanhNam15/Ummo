import React, { useState } from 'react'
import { useEffect } from 'react';
export default function Effect() {
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(0);
    const handle_quantity = () => {
        setQuantity(quantity + 1);
    }
    const handle_price = () => {
        setPrice(price + 10);
    }
    useEffect(() => {
        setPrice(price + 10);
    },[quantity]);

  return (
    <div>
        <h1>Quantity: {quantity} </h1>
        <input type="button" value="quantity" onClick={handle_quantity}/>
        <h1>Price: {price} </h1>
        <input type="button" value="price" onClick={handle_price}/>
    </div>
  );
}
