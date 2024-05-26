import React from "react";

export default function Header({ children }) {
  return (
    <header>
      <Logo />
      {children}
      <Login />
    </header>
  );
}

function Logo() {
  return (
    <div className="logo">
      <img src="./images/logo.png" alt="logo" />
    </div>
  );
}

function Login() {
  return (
    <>
      {/*  
        <Link to="/login" className="login">
          Login
        </Link>
        */}
      <a href="http://localhost:3000/login" className="login">
        Login
      </a>
    </>
  );
}
