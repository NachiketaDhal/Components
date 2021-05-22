import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();

  return (
    <React.Fragment>
      <div className={`sidebar-wrapper ${isSidebarOpen && "show"}`}>
        <aside className="sidebar">
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <div className="sidebar-links">
            {sublinks.map((subLink, i) => {
              return (
                <article key={i}>
                  <h4>{subLink.page}</h4>
                  <div className="sidebar-sublinks">
                    {subLink.links.map((link, i) => (
                      <a href={link.url} key={i}>
                        {link.icon}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </aside>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
