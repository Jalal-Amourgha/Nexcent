import { headerLogo } from "../assets/icons";
import Button from "../components/Button";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="container">
      <nav>
        <a href="/">
          <img src={headerLogo} alt="Logo" />
        </a>
        <div className="links-ul">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <Button label="Register Now" icon="fa-solid fa-arrow-right" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
