import React from "react"
import "./App.css"
import menuImg from "./assets/menu.png"

export default function Header() {
  const [menu, setMenu] = React.useState(false);
  
  function menuButton() {
    setMenu(!menu)
  }
  
  return (
    <header className="header">
      <div className="menu-button">
        <button className="js-menu" onClick={menuButton}>
          <img src={menuImg} className="img-menu"></img>
        </button>
        {
          menu ? 
          <div className="info-menu">
            <div className="menu-section">
              About
            </div>
            <div className="menu-section">
              Yes
            </div>
          </div>
          : null
        }
      </div>
    </header>
  )
}