import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between align-middle p-6 uppercase text-xl border-b">
      <h1 className="font-bold">App Logo</h1>
      <div className="flex gap-6 font-semibold text-gray-500">
        {/* <Link to="/">Dashboard</Link>
        <Link to="/createads">Create Ads</Link> */}
        <h3>
          <Link to={"/"}>Dashboard</Link>
        </h3>
        <h3>
          <Link to={"/createAds"}>Create Ads </Link>
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
