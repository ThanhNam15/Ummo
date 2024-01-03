import React from 'react'
import Card from './Card'
import "../../css/Props.css"
export default function Props() {
  let name = "Manchester United"
  let number = "7"
  let list = ["Bánh mì", "Bún bò", "Cơm tấm", "Mì xào" ]
  return (
    <div>

        {/* CẤU TRÚC map */}

        {/* Cách 1: ngoặc nhọn phải có return */}
        {/* {
          list.map((item, index) => {
          return <Card key = {index} name = {item} number = {index}/>
        })} */}

        {/* Cách 2: ngoặc tròn không cần return */}
        {/* {
          list.map((item, index) => (
            <Card name ={item} number = {index}/>
          ))} */}

          <div className='list'>
          <Card name = {name} number = {number} />
              {
              list.map((item, index) => {
              return <Card key = {index} name = {item} number = {index}/>
              })}
          </div>
        
    </div>
  )
}
