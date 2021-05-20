import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSideBar, showSideBar } = useGlobalContext();

  return (
    <aside className={`sidebar ${showSideBar && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} alt={logo} className="logo" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((socialIcon) => {
          return (
            <li key={socialIcon.id}>
              <a href={socialIcon.url}>{socialIcon.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
