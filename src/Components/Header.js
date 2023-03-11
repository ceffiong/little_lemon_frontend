import Logo from "../Images/logo.png";
import Menu from "../Images/hamburger-menu.png";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [hide, setHide] = useState(true);

  return (
    <>
      <header className="mobile-header">
        <div className="wrapper">
          <img src={Logo} alt="logo" />
          <img
            src={Menu}
            alt="Hamburger menu icon"
            onClick={() => setHide(!hide)}
          />
        </div>
        {hide === false ? (
          <nav className="mobile-nav mobile-nav-width">
            <div>
              <button onClick={() => setHide(!hide)}>&times;</button>
            </div>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservation">Reservation</a>
              </li>
              <li>
                <a href="/order_online">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="mobile-nav">
            <div>
              <button onClick={() => setHide(!hide)}>&times;</button>
            </div>
            <ul>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/reservation">Reservation</a>
              </li>
              <li>
                <a href="/order_online">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <header className="desktop-header">
        <nav className="wrapper desktop-nav">
          <img src={Logo} alt="logo" />
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservation">Reservation</a>
            </li>
            <li>
              <a href="/order_online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
