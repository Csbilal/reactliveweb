import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img3.jpg";
import Common from "./Common"
const Home=()=>{
return(<>
    <Common
   name="Grow Your Bussiness With" 
   imgsrc={web} 
   visit="/service"  
   Btn="Get Started"/>
</>);
};
export default Home;