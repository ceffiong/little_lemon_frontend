import Logo from "../Images/logo-white.png";
function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Little lemon logo" />
      <ul>
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
    </footer>
  );
}

export default Footer;
