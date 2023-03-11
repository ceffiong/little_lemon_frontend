import Logo from "../Images/logo-white.png";
import Facebook from "../Images/facebook.png";
import Twitter from "../Images/twitter.png";
import Instagram from "../Images/instagram.png";
import WhatsApp from "../Images/whatsapp.png";
import Address from "../Images/address.png";
import Phone from "../Images/phone.png";
import Email from "../Images/email.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper footer-contents">
        <img src={Logo} alt="Little lemon logo" />
        <ul className="footer-nav">
          <li>
            <a href="#">
              Doormat <br /> Navigation
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="/reservation">Reservation</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
        <div className="footer-contact">
          <h3>Contact</h3>
          <div className="footer-address">
            <img src={Address} alt="Address icon" />
            <p>1455 E Little York Rd, New Your City</p>
          </div>
          <div className="footer-phone">
            <img src={Phone} alt="Phone icon" />
            <a href="tel:(867) 475-1808">(867) 475-1808</a>
          </div>
          <div className="footer-email">
            <img src={Email} alt="Email icon" />
            <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a>
          </div>
        </div>
        <ul className="footer-social">
          <li>
            <a href="#">
              <img src={Instagram} alt="Instagram logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={WhatsApp} alt="Whatsapp logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Twitter} alt="Twitter logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={Facebook} alt="Facebook logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
