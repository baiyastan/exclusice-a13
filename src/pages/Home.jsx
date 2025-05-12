import React, {useEffect} from 'react'
import Banner from '../components/Banner/Banner'
import ProductList from '../components/ProductList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { getProductFetch } from '../redux/product/productSlice'

function Home() {
  const {product, loading, error, category, search} = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductFetch({category, search}))
  }, [dispatch, category, search])

  return (
    <div>
      <Banner/>
      <ProductList data={product}/>
    </div>
  )
}

export default Home
