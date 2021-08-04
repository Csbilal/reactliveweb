import React from "react";
import Common from "./Common";
import web from "../src/images/my.jpg";
const Aboutus=()=>{
return(<>
 <Common
   name="Welcome To My About page" 
   imgsrc={web} 
   visit="/contact"  
   Btn="Contact now"/>
</>);
};
export default Aboutus;