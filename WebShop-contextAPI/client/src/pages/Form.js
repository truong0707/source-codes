import React from "react";
import { BiLockAlt } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';



export default function Login() {
    return (
        <div style={{ marginTop: "53px", background: "pink" }}>
            <div className="wrapper-Login-Regis">
                <div className="box-form">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div style={{ display: 'flex' }} className="input-field">
                                <p><FaUser /></p>
                                <input type="text" placeholder="User Name" />
                            </div>

                            <div style={{ display: 'flex' }} className="input-field">
                                <p><BiLockAlt /></p>
                                <input type="password" placeholder="User Password" />
                            </div>

                            <input type="submit" value="Login" className="btn-submit" />
                            <p className="social-text">Or Sign in with social platform</p>

                            <div className="social-media">
                                <a href="/" className="social-icon">
                                    <BsFacebook />
                                </a>

                                <a href="/" className="social-icon">
                                    <FcGoogle />
                                </a>

                                <a href="/" className="social-icon">
                                    <AiOutlineTwitter />
                                </a>
                            </div>
                        </form>

                        {/*  */}
                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign up</h2>
                            <div style={{ display: 'flex' }} className="input-field">
                                <p><FaUser /></p>
                                <input type="text" placeholder="User Name" />
                            </div>

                            <div style={{ display: 'flex' }} className="input-field">
                                <p><AiOutlineMail /></p>
                                <input type="text" placeholder="Email Name" />
                            </div>

                            <div className="input-field">
                                <p><BiLockAlt /></p>
                                <input type="password" placeholder="User Password" />
                            </div>

                            <input type="submit" value="Sign up" className="btn-submit" />
                            <p className="social-text">Or Sign in with social platform</p>

                            <div className="social-media">
                                <a href="/" className="social-icon">
                                    <BsFacebook />
                                </a>

                                <a href="/" className="social-icon">
                                    <FcGoogle />
                                </a>

                                <a href="/" className="social-icon">
                                    <AiOutlineTwitter />
                                </a>
                            </div>
                        </form>
                    </div>

                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Member of Brand</h3>
                                <p>The gioi nay la cua chung minh, qua bong xanh, bay giua troi xanh</p>
                                <button className="btn">Sign in</button>
                            </div>

                            {/* <img src="https://tse1.mm.bing.net/th?id=OIP.1a92A-xfl0wjCgDboK9GxwHaEK&pid=Api&P=0&w=314&h=176" alt="" /> */}
                        </div>

                        <div className="panel right-panel">
                            <div className="content">
                                <h3>Mew to Brand?</h3>
                                <p>The gioi nay la cua chung minh, qua bong xanh, bay giua troi xanh</p>
                                <button className="btn">Sign in</button>
                            </div>

                            {/* <img src="https://1.bp.blogspot.com/-I-flF0X3d9E/UMvXpooC4JI/AAAAAAAAbpw/dmVZ-fFw_N8/s1600/hinh-nen-dep.jpg" alt="" /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
