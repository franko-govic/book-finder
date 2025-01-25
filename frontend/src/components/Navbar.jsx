import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navData = ["Browse", "Map", "Help", "Account"];

  return (
    <div className="flex h-[10vh] justify-between items-center">
      <div className="text-3xl font-bold">
        {" "}
        <Link to={"/"}>BookFinder</Link>
      </div>
      <ul className="flex gap-2">
        {navData.map((data, index) => (
          <li key={index}>
            {" "}
            <Link to={`/${data.toLowerCase()}`}>{data}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
