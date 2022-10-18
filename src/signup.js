import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './signup.css';
import { Link } from 'react-router-dom';


const Signup=()=>{
    var x=document.getElementById("a");
    var y=document.getElementById("b");
    function check(){
        var x=document.getElementById("a");
        var y=document.getElementById("b");
        var check=false;
        if(x.value!=y.value){
          document.getElementById("x").innerHTML="Password not match";
          document.getElementById("x").style.color="red";
          check=true;
        }
        else{
            document.getElementById("x").innerHTML="Password  match";
            document.getElementById("x").style.color="green";
        }
        }


    const Sub=(event)=>{
        if(x.value!=y.value){
            alert("Passwrd Not Matched");
            event.preventDefault();
        }
        else {
            alert("Account Created");
        }
    }


    return(
        
     <>
     <Link to="/gotohome"><button className="btn btn-primary">Home</button></Link>
<div className="signup-form">
    <form action="#" method="post">
		<div className="form-header">
			<h2>Sign Up</h2>
			
		</div>
        <div className="form-group">
			<label>Username</label>
        	<input type="text" className="form-control" name="username" required="required"/>
        </div>
        <div className="form-group">
			<label>Email Address</label>
        	<input type="email" className="form-control" name="email" required="required"/>
        </div>
		<div className="form-group">
			<label>Password</label>
            <input type="password" className="form-control" name="password" required="required" id="a"/>
        </div>
		<div className="form-group">
			<label>Confirm Password</label>
            <input type="password" className="form-control" name="confirm_password" required="required" id="b" onInput={check}/><b id="x"style={{color:'red'}}></b>
        </div>        
        <div className="form-group">
			<label className="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>
		<div className="form-group">
			<button type="submit" className="btn btn-primary btn-block btn-lg " onClick={()=>Sub(event)}>Signup</button>
		</div>	
    </form>
	<div className="text-center small" style={{color:'black'}}>Already have an account? <Link to="/grocery/login">Login here</Link></div>
</div>
     
     
     </>
    
    );
}



export default Signup;