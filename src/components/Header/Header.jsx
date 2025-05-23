import React, {useState} from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import like from "../../assets/svg/like.svg"
import basket from "../../assets/svg/basket.svg"
import lupa from "../../assets/svg/lupa.svg"
import { setSearch } from '../../redux/product/productSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

function Header() {
  const [text, setText] = useState("")
  const dispatch = useDispatch()
  const {t, i18n} = useTranslation()

  function handleKeyDown(e) {
    if(e.keyCode == 13) {
      dispatch(setSearch(text))
      setText("")
    }
  }

  function handleChangeLng (e) {
    let lng = e.target.value;
    i18n.changeLanguage(lng)
  }

  return (
    <div className='header'>
      <div className="header-top">
        <div className="header-content container">
          <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link>ShopNow</Link>
          </p>
          <select onChange={handleChangeLng}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <div className="header-main container">
        <h2>{t("logo")}</h2>
        <div className="main-link">
          <ul>
            <Link to="/">{t("home")}</Link>
            <Link>Contact</Link>
            <Link>About</Link>
            <Link to="/register">Sign Up</Link>
          </ul>
        </div>
        <div className="main-search">
          <div className='lupa'>
            <input 
              value={text} 
              onChange={(e) => setText(e.target.value)} 
              type="text"
              placeholder='What are you looking for?'
              onKeyDown={handleKeyDown}
            />
            <img src={lupa} alt="" />
          </div>
          <div className="fot">
            <Link to="/wishlist">
              <img src={like} alt="" />
            </Link>
            <img src={basket} alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Header