import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import like from "../../assets/svg/like.svg"
import basket from "../../assets/svg/basket.svg"
import lupa from "../../assets/svg/lupa.svg"

function Header() {
  return (
    <div className='header'>
      <div className="header-top">
        <div className="header-content container">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link>ShopNow</Link>
          </p>
          <select>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <div className="header-main container">
        <h2>Exclusive</h2>
        <div className="main-link">
          <ul>
            <Link>Home</Link>
            <Link>Contact</Link>
            <Link>About</Link>
            <Link>Sign Up</Link>
          </ul>
        </div>
        <div className="main-search">
          <div className='lupa'>
            <input type="text"
              placeholder='What are you looking for?'
            />
            <img src={lupa} alt="" />
          </div>
          <div className="fot">
            <img src={like} alt="" />
            <img src={basket} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header