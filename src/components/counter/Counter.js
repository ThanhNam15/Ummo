import React from 'react'

export default function Counter(props) {

// Handle event on ReactJS (Xử lý sự kiện trên ReactJS) 
const handleClick = () => {
    console.log("name");
}

  return (
    <div>
        <button onClick={handleClick}>Click me!</button>
        {/* {props.children} */}
        {/* {props.name} */}
        {/* {props.age} */}
    </div>
  )
}
