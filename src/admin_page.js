import React , {useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './admin.css';



const Admin=()=>{

	const[uname,setUname]=useState("anuj");
	const[pwd,setpwd]=useState("12345");

console.log(setUname);


// function Sub(){
// 	if(setUname==uname && setpwd==pwd){
// 		console.log("valid");
// 		alert("Valid");
// 	}

// 	else {
// 		console.log("Invalid");
// 		console.log(setUname);
// 		alert("Invalid");
// 	}
// }

    return(
       <>
	   <form action="">
		<div>
			<label htmlFor="uname">Username</label>
<input type="text" name="uname" id="uname"
onChange={(e)=>setUname(e.target.value)}
/>
		</div>
		
		<div>
			<label htmlFor="pwd">Password</label>
<input type="password" name="password" id="pwd"
onChange={(e)=>setpwd(e.target.value)}
/>
		</div>


<button type="submit" onClick={Sub}>Login</button>

	   </form>
	   
	   
	   </>
    )
}


export default Admin;