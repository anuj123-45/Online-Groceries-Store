import React , {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './admin.css';




const Admin=()=>{

	


const Sub=(e)=>{

	
var x=document.forms['frms']['uname'].value;

var y=document.forms['frms']['password'].value;
	if(x == "anuj" && y=="12345"){
		
		document.getElementById("l").href='/mainpage';
	}

	else {
		alert("Invalid credentials");
		e.preventDefault();
	}
}

    return(
       <>
	   
	   <div className="container h-100">
		<div className="d-flex justify-content-center h-100">
			<div className="user_card">
				<div className="d-flex justify-content-center">
					<div className="brand_logo_container">
					<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" className="brand_logo" alt="Logo"/>
					</div>
				</div>
				
				<div className="d-flex justify-content-center form_container">
					<form name="frms">
						<div className="input-group mb-3">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-user"></i></span>
							</div>
							<input type="text" name="uname" className="form-control input_user"  placeholder="username"/>
						</div>
						<div className="input-group mb-2">
							<div className="input-group-append">
								<span className="input-group-text"><i className="fas fa-key"></i></span>
							</div>
							<input type="password" name="password" className="form-control input_pass"  placeholder="password"/>
						</div>
						<div className="form-group">
							<div className="custom-control custom-checkbox">
								<input type="checkbox" className="custom-control-input" id="customControlInline"/>
								<label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
							</div>
						</div>
							<div className="d-flex justify-content-center mt-3 login_container">
				 	<a href='' id="l"><button type="button" name="button" className="btn login_btn" onClick={(e)=>Sub(e)}>Login</button></a>
				   </div>
					</form>
				</div>
		
				<div className="mt-4">
					<div className="d-flex justify-content-center links">
						Don't have an account? <a href="#" className="ml-2">Sign Up</a>
					</div>
					<div className="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	   
	   
	   
	   </>
    )
}


export default Admin;