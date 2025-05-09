import React from 'react'
import Prodact from '../Product/Product'
import "./List.scss"
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'

function ProductList({data}) {
  const {loading} = useSelector((state) => state.products)

  if(loading) {
    return <Loading/>
  }
  return (
    <div className='list'>
      {
        data.map((item) => (
          <Prodact key={item.id} pro={item}/>
        ))
      }
    </div>
  )
}

export default ProductList
