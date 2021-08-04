import React from "react";
import {Switch ,Route,Redirect} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle" ;
import Home from "./Home";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Services from "./Services";
import Menu from "./Menu";
import Footer from "./Footer";

 const App7=()=> {
return(
    <>
    <Menu />
    <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={Aboutus}></Route>
        <Route exact path="/contact" component={Contactus}></Route>
        <Route exact path="/Service" component={Services}></Route>
         <Redirect to="/" />
    </Switch>
    <Footer></Footer> 
    </>
)

};
export default App7;
