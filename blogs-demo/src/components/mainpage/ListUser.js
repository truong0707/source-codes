import React from "react";
import { useHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import TopBarPartner from "./TopBarPartner";
import './mainpage.css'
import User from "./User";
const routes = [


    {
        path: "/user1",
        exact: true,
        main: () =>
            <div>
                <TopBarPartner
                    imagePartner='./image/user.jpg'
                    namePartner='Ngô Bảo Công'
                />
                <div className='MessBody' ></div>
            </div>
    },
    {
        path: "/user2",
        main: () =>

            <div>
                <TopBarPartner
                    imagePartner='./image/user2.jpg'
                    namePartner='Huỳnh Ngọc Huy'
                />
                <div className='MessBody' ></div>
            </div>
    },
    {
        path: "/user3",
        main: () =>
            <div>
                <TopBarPartner
                    imagePartner='./image/avatar.jpg'
                    namePartner='Lý Văn Chính'
                />
                <div className='MessBody' ></div>
                
            </div>
    },
];

export default function ChatUser() {

    const history = useHistory();


    const chinh = (e) => {
        history.push('/info');
    }
    const cong = (e) => {
        history.push('/info');
    }
    const huy = (e) => {
        history.push('/info');
    }

    return (
        <Router>
            <div style={{ display: "flex" }}>
                <div className='UserNav'>
                    <ul style={{ listStyleType: "none", padding: 0, width: "100%" }}>
                        <li>
                            <Link to="/user1">
                                <User
                                    avatarUser='./image/user.jpg'
                                    nameUser='Ngô Bảo Công'
                                />
                                <div className="chinh">
                                    <button onClick={cong}>Trang cá nhân</button>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/user2">
                                <User
                                    avatarUser='./image/user2.jpg'
                                    nameUser='Huỳnh Ngọc Huy'
                                />
                                <div className="chinh">
                                    <button onClick={huy}>Trang cá nhân</button>
                                </div>

                            </Link>
                        </li>
                        <li>
                            <Link to="/user3">
                                <User
                                    avatarUser='./image/avatar.jpg'
                                    nameUser='Lý Văn Chính'
                                />
                                <div className="chinh">
                                    <button onClick={chinh}>Trang cá nhân</button>
                                </div>

                            </Link>
                        </li>
                    </ul>
                </div>
                <div style={{ flex: 1, padding: "10px" }}>
                    <Switch>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>

                </div>

            </div>
        </Router>
    );
}

