import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import Newletter from '../Footer/Newletter';


class Error extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="error_page">
                            <h4>404</h4>
                            <p>Link đã xảy ra lỗi   </p>
                            <form action="#" method="post">
                                <input className="serch" type="search" name="serch" placeholder="Tìm kiếm" required=""></input>
                                <button className="btn1"><i className="fa fa-search" aria-hidden="true"></i></button>
                                <div className="clearfix"> </div>
                            </form>
                            <ul className="social-nav model-3d-0 footer-social social two">
                                <li>
                                    <a href="#" className="facebook">
                                        <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                        <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="twitter">
                                        <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                        <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="instagram">
                                        <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                        <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                                    </a>
                                </li>

                            </ul>
                            <a className="b-home" href="/Index">Quay về trang chủ</a>
                        </div>
                    </div>
                </div>
                <Newletter />
                <Footer />
            </div>

        );
    }
}
export default Error;