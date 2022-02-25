import React from 'react'
import './Header.css'
import theLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <div className="logoContainer">
        <img src={theLogo} alt="logo" className="theLogo" />
      </div>

      {/* searchBar */}
      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" className="searchIcon" />
        </div>
        <input className="searchInput" placeholder="Collection, Item or User..." type="text" name="" id="" />
      </div>

        {/* navKinda */}
      <div className="headerItems">
        <p className="headerNav">Drops</p>
        <p className="headerNav">Marketplace</p>
        <p className="headerNav">Create</p>
      </div>

      {/* actions including themeSwitch and button */}
      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} alt="" className="themeSwitchIcon" />
        </div>
      </div>

      {/* login button */}

      <div className="loginButton">
        GET IN
      </div>
    </div>

  )
}

export default Header