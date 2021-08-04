import { PinDropSharp } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img2.jpg";
const Common=(props)=>{
return(<>
<section id="header" className="d-flex align-items-center">
  <div className="container-fluid">
    <div className="row">
        <div className="col-10 mx-auto">
         <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
              <h1>{props.name} <strong className="brand-pk">Tecnical Developer</strong> </h1>
              <h2 className="my-3">We Are The Team Of Talented Web Designer & Developer</h2>
                <div className="mt-3">
                  <NavLink to={props.visit} className="btn-get-started">{props.Btn}</NavLink>
               </div>         
            </div>
               <div className="col-lg-6 order-1 order-lg-2 header_img">
                 <img  src={props.imgsrc} className="img-fluid animated" alt="home" />         
               </div>   
               </div>         
        </div>
    </div>
  </div>
</section>
</>);
};
export default Common;