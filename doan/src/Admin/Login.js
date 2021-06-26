
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function LogIn() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            history.push("/add")
        }
    }, [])
    async function login() {
        console.warn(email, password)
        let item = { email, password };
        let result = await fetch("http://localhost:8000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json   ',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/index")
    }
    return (
        <div className="App">
            <Header></Header>
            <section>
                <div id="page-wrapper" className="sign-in-wrapper">
                    <div className="graphs">
                        <div className="sign-in-form">
                            <div className="sign-in-form-top">
                                <p><span>Đăng nhập</span> </p>
                            </div>
                            <div className="signin">
                                <div className="signin-rit">
                                    <span className="checkbox1">
                                        <label className="checkbox"><input type="checkbox" name="checkbox" checked="" />Quên mật khẩu ?</label>
                                    </span>
                                    <p><a href="#">Click </a> </p>
                                    <div className="clearfix"> </div>
                                </div>
                                <form>
                                    <div className="log-input">
                                        <div className="log-input-left">
                                            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Địa chỉ Email " required="" />
                                        </div>
                                        <span className="checkbox2">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i></label>
                                        </span>
                                        <div className="clearfix"> </div>
                                    </div>
                                    <div className="log-input">
                                        <div className="log-input-left">
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder=" " required=" " />
                                        </div>
                                        <span className="checkbox2">
                                            <label className="checkbox"><input type="checkbox" name="checkbox" checked="" /><i> </i></label>
                                        </span>
                                        <div className="clearfix"> </div>
                                    </div>

                                </form>
                                <button onClick={login} className="btn btn-primary">Đăng nhập</button>
                            </div>
                            <div className="new_people">
                                <h4>Đăng ký tài khoản mới</h4>
                                <p>Chào mừng bạn đến với Phương Nam Sport.</p>
                                <a href="/SingUp">Đăng ký ngay bây giờ!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>

        </div>
    );

}
export default LogIn;