import React from 'react'
import './lo.scss'
export default function Login() {
    const img = 'url(https://genk.mediacdn.vn/2016/maxresdefault-1480153329217.jpg) '
    return (
            <div className="login">
            <div  style={{ backgroundImage: img, backgroundSize:'100%' }} class="main" >
                <form action="" method="POST" class="form" id="form-1">
                    <h3 class="heading">Đăng Nhập</h3>                
                    <div class="spacer"></div>

                    <div class="form-group ">
                        <label for="fullname" class="form-label">Tên tài khoản</label>
                        <input type="fullname" name="name" placeholder="VD: tientran123" className="form-control"/>
                        <span class="form-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Mật khẩu</label>
                        <input type="password" name="password"placeholder="Nhập mật khẩu" className="form-control"/>
                        <span class="form-message"></span>
                    </div>
                    <a className="button" href="/">
                        Đăng Nhập
                    </a>
                   
                </form>
            </div>
        </div>
    )
}

