import React from "react";
import { slide as Menu } from "react-burger-menu";

export default (props) => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="text-1" href="/Burgers">
        Home
      </a>


      <a className="text-2" href="/Sides">
        Staking
      </a>


      <a className="text-3" href="/Drinks">
        About
      </a>
    </Menu>
  );
};