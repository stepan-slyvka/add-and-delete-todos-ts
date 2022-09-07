import React from "react";

import classes from "../components/Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <div className={classes.navbar}>
      <h1>My Todos List</h1>
    </div>
  );
};

export default Navbar;
