
export default function SingUpForm() {

    return (
        <>  <div className="container signUpForm">
            <form className="allform">
                <h2 className="titleDK">Đăng Ký</h2>


                <h5 className="titleInput3">Tên tài khoản:</h5>
                <div className="input-group icon-input">
                    <input type="text" id="email" className="input-control" placeholder="nhập tài khoản" />
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <i className="fa fa-user-plus icon"></i>
                    </span>
                </div>


                <h5 className="titleInput3">Tên tài khoản:</h5>
                <div className="input-group icon-input">
                    <input type="text" id="email" className="input-control" placeholder="nhập tài khoản" />
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <i className="fa fa-user-plus icon"></i>
                    </span>
                </div>


                <h5 className="titleInput3">Tên tài khoản:</h5>
                <div className="input-group icon-input">
                    <input type="text" id="email" className="input-control" placeholder="nhập tài khoản" />
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <i className="fa fa-user-plus icon"></i>
                    </span>
                </div>

                <h5 className="titleInput2">Mật Khẩu:</h5>
                <div className="input-group icon-input">
                    <input type="text" id="email" className="input-control" placeholder="nhập mật khẩu" />
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <i className="fa fa-lock lock-btn icon"></i>
                    </span>
                </div>

                <h5 className="titleInput">Nhập Lại Mật Khẩu:</h5>
                <div className="input-group icon-input">
                    <input type="text" id="email" className="input-control" placeholder="nhập mật khẩu" />
                    <span className="input-group-text" id="inputGroup-sizing-lg">
                        <i className="fa fa-lock lock-btn icon"></i>
                    </span>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
}

