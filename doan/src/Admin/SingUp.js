import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Register() {
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history.push("/add")
        }

    }, [])
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();

    async function dangnhap() {
        let item = { name, email, password }
        console.warn(item)

        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
            }
        }


        )
        result = await result.json()
        localStorage.setItem("user-info", JSON.stringify(result))
        history.push("/index")
    }




    return (
        <div className="App">
            <Header></Header>
            <section>
                <div id="page-wrapper" className="sign-in-wrapper">
                    <div className="graphs">
                        <div className="sign-up">
                            <h3>Đăng Ký</h3>

                            <h5>Thông tin cá nhân</h5>
                            <div className="sign-u">
                                <div className="sign-up1">
                                    <h4> Họ và tên :</h4>
                                </div>
                                <div className="sign-up2">
                                    <form>
                                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder=" " required=" " />
                                    </form>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                            <div className="sign-u">
                                <div className="sign-up1">
                                    <h4>Địa chỉ email * :</h4>
                                </div>
                                <div className="sign-up2">
                                    <form>
                                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder=" " required=" " />
                                    </form>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                            <div className="sign-u">
                                <div className="sign-up1">
                                    <h4>Mật khẩu* :</h4>
                                </div>
                                <div className="sign-up2">
                                    <form>
                                        <input type="password" id="thongbao" value={password} onChange={(e) => setPassword(e.target.value)} placeholder=" " required=" " />
                                    </form>
                                </div>
                                <div className="clearfix"> </div>
                            </div>

                            <button onClick={dangnhap} className="btn btn-primary">Đăng ký</button>


                            <div className="sub_home">


                                <div className="sub_home_right">
                                    <p>Quay trở lại <a href="/index">Trang chủ</a></p>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Footer></Footer>
        </div>

    );


}
export default Register;