import { footerLogo } from "../assets/icons";
import { footerLinks, socials } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-4">
          <div>
            <img src={footerLogo} alt="Logo" className="footer-logo" />
            <p>
              Copyright © 2020 Landify UI Kit.
              <br />
              All rights reserved
            </p>
            <div className="socials">
              {socials.map((social) => (
                <div key={social.label} className="social-box">
                  <i className={social.icon}></i>
                </div>
              ))}
            </div>
          </div>
          {footerLinks.map((category) => (
            <div key={category.category}>
              <h3>{category.category}</h3>
              <ul>
                {category.links.map((link) => (
                  <li key={link.name}>
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3>Stay up to date</h3>
            <div className="input-box">
              <input type="text" placeholder="Your email address" />
              <i className="fa-regular fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
