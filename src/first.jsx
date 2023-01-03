import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Link}  from 'react-router-dom';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import {
   
    useNavigate
  } from "react-router-dom";
  

const First=()=>{
    const { loginWithRedirect , logout, isAuthenticated} = useAuth0();
    const navigate = useNavigate();
    return(
        <>
  
          
      <div>
   <button type="button" className="btn btn-warning">
   <Link  className="text-decoration-none text-dark" onClick={() => loginWithRedirect()}>
            Login
          </Link>
        </button>
   </div>


   {
        isAuthenticated && 
         navigate("/home")
        
       
      }
    
        </>
    );
}

export default First;