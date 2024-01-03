import React from 'react'
import "../../css/Products.css"
import ProductItem from './ProductItem' 
import { ProductList } from '../../data'

export default function Products() {
  return (
      <div className="product-list">
        {/* Thêm key cho từng phần: index */}
        {ProductList.map((item, index) => {
          // || : đúng hoặc sai
          return <ProductItem key = {index} name = {item.name || "Name"} price = {item.price || "Default"} image = {item.image}/>
        })}
      </div>
  )
}
