import React from "react";
import { Link } from "react-router-dom";

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
          <Link to="/signout" style={linkStyle}>
            Sign Out
          </Link>
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
