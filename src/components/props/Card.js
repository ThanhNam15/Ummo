import React from 'react'
//Cấu trúc props
export default function Card(props) {
  let {name, number} = props;
  return (
    <div className='card'>
        <h2>{name}, {number}</h2>
    </div>
  )
}
