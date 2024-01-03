import React, { useState } from "react";

export default function CountUp() {
// HÀM count_up
const [count, setCount] = useState(10);
function handle_count_up() {
    setCount(count + 1); //count = count + 1
}
console.log("render count_up");
  return (
    <div>
        {/* COUNT UP */}
        <p>Number: {count}</p>
        <button onClick={handle_count_up}>Count up</button>
    </div>
  )
}
