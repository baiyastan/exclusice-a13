import React from 'react'
import "./Product.scss"
// import joe from "./img/joe.png"
import eye from "../../assets/svg/eye.svg"
import star from "../../assets/svg/star.svg"
import like from "../../assets/svg/like.svg"
import { useDispatch } from 'react-redux'
import { addWish } from '../../redux/wish/wishSlice'

function Product({pro}) {

  const dispatch = useDispatch()

  return (
    <div>
      <div className='pro'>
        <img src={pro.thumbnail} alt="" />
        <div className="price">
          <p>-40%</p>
          <div className="lol">
            <div className="save">
              <img onClick={() => dispatch(addWish(pro))} src={like} alt="" />
            </div>
            <div className="save">
              <img src={eye} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="name">
        <div className="descrip">
          <h4>{pro.title}</h4>
          <div className='pol'>
            <p>$120</p>
            <span>$160</span>
          </div>
          <img src={star} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Product
