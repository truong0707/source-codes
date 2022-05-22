import React, { useState} from 'react'
import LoginForms from './LoginForms';
import './loginForm.css'

function HandleLogin() {
const adminUser = {
  email: "admin@admin.com",
  password: "admin123"
}

const [user, setUser] = useState({name:"", email: ""});
const[error, setError] = useState("");

const login = details => {
  console.log(details);

  if (details.email === adminUser.email && details.password === adminUser.password){
    console.log("Loggde in");
    setUser({
      name: details.name,
      email: details.email
    });
  }else{
    console.log("Detals do not match!");
    setError("Detals do not match!");
  }
}

const Logout = () => {
  setUser({name:"", email: ""});
}

  return (
    <div className="Login-content"   style={{  
      backgroundImage: "url(" + "./images/login-background/login-background1.jpg" + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }}>
     {(user.email !=="") ? (
       <div className = "Welcome">
         <h2>Welcome, <span>{user.name}</span></h2>
         <button onClick={Logout}>logout</button>
       </div>
     ) : (
       <LoginForms logins={login} error={error} />
     )}
    </div>
  );
}

export default HandleLogin;
