import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
const navbarStyle = {
  backgroundColor: "#333", // Adjust background color
  padding: "10px 0", // Adjust padding
  color: "white", // Adjust text color
};

const linkStyle = {
  color: "white", // Adjust link color
  marginRight: "15px", // Adjust spacing between links
  textDecoration: "none", // Remove underline from links
};

const Home = (props) => {
  const SignOutHandler=()=>{
    auth.signOut();
  }
  const[isLogged,SetisLogged]=useState(false);
  const [user, setUser] = useState('');

  useEffect(()=>{
    onAuthStateChanged(auth,(admin)=>{
     if(admin){
       SetisLogged(1);
       setUser(admin);
     }
     else{
       SetisLogged(0);
       
     }
    })
   },[user])
  return (
    <div>
      <div style={navbarStyle}>
        <Link to="/" style={linkStyle}>
          DEV@Deakin
        </Link>
        <div style={{ float: "right" }}>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
          <Link to="/features" style={linkStyle}>
            Features
          </Link>
          {isLogged?<button onClick={SignOutHandler}>Sign Out</button>:<Link to="/login" style={linkStyle}>
            Log In
          </Link>}
        </div>
      </div>
      <div>
        {/* <h1>
          <Link to="/login">New User? Click here to Log in</Link>
        </h1> */}
      </div>
    </div>
  );
}

export default Home;  
