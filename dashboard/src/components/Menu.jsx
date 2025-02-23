import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuItems = [
    { path: "/", label: "Dashboard" },
    { path: "/orders", label: "Orders" },
    { path: "/holdings", label: "Holdings" },
    { path: "/positions", label: "Positions" },
    { path: "/funds", label: "Funds" },
    { path: "/apps", label: "Apps" },
  ];

  return (
    <div className="menu-container">
      <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link style={{ textDecoration: "none" }} to={item.path}>
                <p className={location.pathname === item.path ? "menu selected" : "menu"}>
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
