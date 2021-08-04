import React, { useState } from "react";

const Contactus=()=>{
   const [data ,setdata ]=useState({
       fullname:" ",
       phone :" ",
       email : " ",
       msg :" ",
   }) 
   const formSubmit=(e)=>{
       e.preventDefault();
       alert(`${data.fullname} ${data.phone} ${data.email} ${data.msg}`)
    };
   const inputEvent=(event)=>{  
       const {name ,value}=event.target;
       setdata((PreVal)=>{
          return{ ...PreVal,
          [name]:value,}
       })
   };
return(<>
<div className="my-3">
  <h1 className="text-center">Contact Us</h1>
</div>
 <div className="container  contact_div">
   <div className="row">
     <div className="col-md-6 col-10 mx-auto">
       <form onSubmit={formSubmit}>
       <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">FullName</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent}  placeholder="Enter Your Name" />
       </div>
       <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Phone</label>
          <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Enter Your Mobile Number" />
       </div>
       <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com" />
       </div>
     <div className="mb-3">
   <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
   </div>
   <div class="col-auto">
    <button type="submit" className="btn btn-outline-primary mb-3">Submit Form</button>
  </div>

       </form>
     </div>
   </div>
 </div> 
</>);
};
export default Contactus;