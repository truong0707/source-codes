import React, { useState } from 'react'
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";


export default function LoginForm(props) {
    const [details, setDetails] = useState({email: "", password: ""})
    // const history = useHistory();

    
    const submitHandler = e => {
        e.preventDefault();
        // check input ok

        props.login(details);
    }
    // const redirectLogin = () => {
    //     history.replace('/mainpage');
    // }
    return (
       <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Đăng Nhập</h2>
                {/* {(error !="")? (<div className="error">{props.error}</div>) : "" } */}
                
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="emWail" name="email" placeholder='Nhập email của bạn' id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder='Nhập mật khẩu của bạn' id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="LOGIN"></input>
                 <span className ="resister">Đăng ký <Link to='/register'>ở đây</Link></span>
                 {/* <span className ="resister">Đăng ký <Link to='/mainpage'>ở đây</Link></span> */}

            </div>
       </form>
    )
}

