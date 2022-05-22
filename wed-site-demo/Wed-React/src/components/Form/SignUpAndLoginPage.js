import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import LoginForm from "./SignUp";
import SingUpForm from "./SignUpForm";
import "./AllForm.css"
export default function SignUpAndLoginPage() {

    return (
        <>
            <Router>
                <ul className="nav nav-tabs">
                  {/*   <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="">Active</a>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/DangNhap">Đăng Nhập</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/DangKy">Đăng Ký</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/HuongDan">Hướng dẫn</Link>
                    </li>
                </ul>


                <Switch>
                    <Route path='/DangNhap'>
                        {<LoginForm/>}
                    </Route>

                    <Route path='/DangKy'>
                        {<SingUpForm/>}
                    </Route>

                    <Route path='/HuongDan'>
                        Hướng Dẫn
                    </Route>


                </Switch>


            </Router>
        </>
    );
}