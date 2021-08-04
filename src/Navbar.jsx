import React from "react";
import { NavLink } from "react-router-dom";


const Navbar=()=>{
  return (
      <>
      <div className="menu">
      <NavLink exact to="/" activeClassName="active_class">AboutUs</NavLink>
      <NavLink exact to="/service" activeClassName="active_class">Service</NavLink>
      <NavLink   to="/search" activeClassName="active_class">Search</NavLink>
      <NavLink exact to="/contact" activeClassName="active_class">Contactus</NavLink>
      <NavLink   to="/user/bilal/ali"  activeClassName="active_class">User</NavLink>
     
       </div>
      </>
  );
};
export default Navbar;