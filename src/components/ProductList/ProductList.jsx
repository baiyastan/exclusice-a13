import React from 'react'
import Prodact from '../Product/Product'

function ProductList({data}) {
  return (
    <div>
      {
        data.map((item) => (
          <Prodact key={item.id} pro={item}/>
        ))
      }
    </div>
  )
}

export default ProductList
