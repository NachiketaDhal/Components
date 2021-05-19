import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const linkRef = useRef();
  const ulRef = useRef();

  useEffect(() => {
    const ulHeight = ulRef.current.getBoundingClientRect().height;
    if (visible) {
      linkRef.current.style.height = `${ulHeight}px`;
    } else {
      linkRef.current.style.height = "0px";
    }
  }, [visible]);

  return (
    <React.Fragment>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img className="logo" src={logo} alt="logo" />
            <button className="nav-toggle" onClick={() => setVisible(!visible)}>
              {visible ? <ImCross /> : <FaBars />}
            </button>
          </div>
          <div className="links-container" ref={linkRef}>
            <ul className="links" ref={ulRef}>
              {links.map((link) => {
                return (
                  <li key={link.id}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="social-icons">
            {social.map((socialIcon) => {
              return (
                <li>
                  <a href={socialIcon.url} key={socialIcon.id}>
                    {socialIcon.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
