import React, { useState } from 'react';
import './loginaccount1.css';
import LoginForm from './LoginForm';
import { useHistory } from "react-router";
import './loginaccount2.css'

function LoginAccount() {
  const adminUser = {
    email: "hoangviet@gmail.com",
    password: "hoangviet123",

  }

  const history = useHistory();
  const [user, setUser] = useState({ name: "", email: "" });

  const [error, setError] = useState("");

  const handleLogin = details => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
      history.replace('/mainpage');
    } else {
      alert("Thông tin chi tiết không khớp!")
      console.log("Thông tin chi tiết không khớp!")
      setError("Thông tin chi tiết không khớp!");
    }
  }

  const Logout = () => {
    setUser({ name: "", email: "" });
  }

  return (
    <div className="login">
      {(user.email !== "") ? (
        <div className="welcome">
          <h2>Xin chào, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm login={handleLogin} error={error} />
      )}
    </div>
  );
}

export default LoginAccount;
