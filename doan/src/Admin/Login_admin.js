import React, { Component } from 'react';

class Login_admin extends Component {
    render() {
        return (
            <section>
                <div className="App"></div>

                <div id="page-wrapper" className="sign-in-wrapper">
                    <div className="graphs">
                        <div className="sign-in-form">
                            <div className="sign-in-form-top">
                                <p><span>Đăng nhập</span> </p>
                            </div>
                            <div className="signin">
                                <div className="signin-rit">
                                    <span className="checkbox1">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" checked="" />Nhớ mật khẩu</label>
                                    </span>
                                    <p><a href="#">Click </a> </p>
                                    <div className="clearfix"> </div>
                                </div>
                                <form>
                                    <div className="log-input">
                                        <div className="log-input-left">
                                            <input type="text" placeholder="Địa chỉ Email " required="" />
                                        </div>
                                        <span className="checkbox2">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i></label>
                                        </span>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="log-input">
                                        <div className="log-input-left">
                                            <input type="password" placeholder=" " required=" " />
                                        </div>
                                        <span className="checkbox2">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i></label>
                                        </span>
                                        <div className="clearfix"> </div>
                                    </div>

                                </form>
                                <button className="btn btn-primary">Đăng nhập</button>
                                {/* <p><label class="checkbox11"><input type="checkbox" name="checkbox" /><i> </i>Nhớ mật khẩu</label></p> */}
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );

    }
}
export default Login_admin;