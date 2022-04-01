import React from "react";
import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
const AddUser=()=>{
    let navigate =useNavigate();
    const[user,setUser]=useState({
        name:" ",
        username:" ",
        email:" ",
        phone:" ",
    });
    const {name,username,email,phone}=user;
    const onInputChange=e=>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3005/users" ,user);
        navigate.push("/")
    }
    return(
        <div className='container'>
            <form class = "row g-3" onSubmit={e=>onSubmit(e)}>
            <div class="col-mb-6">
  <label for="name" class="form-label">Name</label>
  <input type="text" class="form-control" name="name" placeholder="Enter your Name" value={name} onChange={e=>onInputChange(e)} />
</div>
<div class="col-mb-6">                                                                                                                                      
  <label for="username" class="form-label">UserName</label>
  <input type="text" class="form-control" name="username" placeholder="Enter the user Name" value={username} onChange={e=>onInputChange(e)} />
</div>                                                                                                                                                  
<div class="col-mb-6">
  <label for="email" class="form-label">Email</label>
  <input type="text" class="form-control" name="email" placeholder="Enter the email" value={email} onChange={e=>onInputChange(e)} />
</div>
<div class="col-mb-6">
  <label for="phone" class="form-label">Phone</label>
  <input type="text" class="form-control" name="phone" placeholder="Enter the phone number" value={phone} onChange={e=>onInputChange(e)} />
</div>

<div className="col-12">
    <button className="btn btn-primary">AddUser</button>
</div>
            </form>
        </div>
    )
        
    }
    
export default AddUser;
    

