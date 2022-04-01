import React from "react";
const Contact=()=>{
    return(
        <div ClassName='container'>
            <div className="py-4" >
                <h2>Contact Page</h2><br>
                </br>
                <form>                                                                               
               <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter the Email Address"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="Password" class="form-control" id="exampleFormControlInput1" placeholder="Password"></input>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"> Confirm Password</label>
  <input type="Confirm Password" class="form-control" id="exampleFormControlInput1" placeholder="Confirm Password"></input>
</div>
<div class="mb3">
<button type="submit" class="btn btn-primary">Add User</button>
</div>
                </form>
            </div>
        </div>
    )
}
export default Contact;
