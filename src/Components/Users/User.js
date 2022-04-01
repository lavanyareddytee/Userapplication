import React,{useState,useEffect}from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import {Link} from "react-router-dom";
const User =()=>{
    const [user,setUser]=useState({
        name:" ",
        username:" ",
        email:" ",
        phone:" ",
   
    });
    const {id}=useParams();
    useEffect(()=>{
        loadUser();
    })
    const loadUser=async()=>{
       const res=await axios.get(`http://localhost:3005/users/${id}`);
       //console.log(result);
        setUser(res.data);
   
    };
    return(
       <div className="container py-4">
           <Link className="btn-btn-primary" to="/home">Back to Home</Link>
            <h1 className="display-4">User Id:{id}</h1>
            <hr />
           <ul className="list-group w-50">
            <li className="list-group-item">name:{user.name}</li>
           <li className="list-group-item">username:{user.username}</li>
            <li className="list-group-item">email:{user.email}</li>
            <li className="list-group-item">phone:{user.phone}</li>
           
           </ul>
        </div>
    )
}
export default User;