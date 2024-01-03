import React, { useState } from "react";

export default function Count_down() {
const [count, setCount] = useState(10);
function handle_count_down() {
    setCount(count - 1); //count = count - 1
}
console.log("render count_down");
  return (
    <div>
        {/* COUNT_DOWN */}
        <p>Number: {count}</p>
        <button onClick={handle_count_down}>Count down</button> 
    </div>
  )
}
