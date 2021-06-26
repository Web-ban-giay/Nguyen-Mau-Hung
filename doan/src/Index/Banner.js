import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

class Banner extends React.Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="banner_top" id="home">
                        <div className="wrapper_top_w3layouts">

                            <div className="header_agileits">
                                <div className="logo">
                                    <h1><a className="navbar-brand" href="/Index"><span>PN</span> <i>Sport</i></a></h1>
                                </div>
                                <div className="overlay overlay-contentpush">
                                    <button type="button" className="overlay-close"><i className="fa fa-times" aria-hidden="true"></i></button>

                                    <nav>
                                        <ul>

                                            <li><a href="/Index" className="active">Trang chủ</a></li>
                                            <li><a href="/About">Giới thiệu</a></li>
                                            <li><a href="/404">Team</a></li>
                                            <li><a href="/Shop">Shop </a></li>
                                            <li><a href="/Contact">Liên hệ</a></li>
                                            <li><a href="/Register">Đăng ký</a></li>
                                            <li><a href="/Login">Đăng nhập</a></li>

                                            {/* <li><Link to="/Shop">Shop</Link></li> */}
                                        </ul>
                                    </nav>
                                    <nav title="User Name"></nav>
                                </div>
                                <div className="mobile-nav-button">
                                    <button id="trigger-overlay" type="button"><i className="fa fa-bars" aria-hidden="true"></i></button>
                                </div>
                                {/* <!-- cart details --> */}
                                <div className="top_nav_right">
                                    <div className="shoecart shoecart2 cart cart box_1">
                                        <form action="#" method="post" className="last">
                                            <input type="hidden" name="cmd" value="_cart" />
                                            <input type="hidden" name="display" value="1" />
                                            <button className="top_shoe_cart" type="submit" name="submit" value=""><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></button>
                                        </form>
                                    </div>

                                </div>
                                {/* <!-- //cart details --> */}
                                {/* <!-- search --> */}
                                <div className="search_w3ls_agileinfo">
                                    <div className="cd-main-header">
                                        <ul className="cd-header-buttons">
                                            <li><a className="cd-search-trigger" href="#cd-search"> <span></span></a></li>
                                        </ul>
                                    </div>
                                    <div id="cd-search" className="cd-search">
                                        <form action="#" method="post">
                                            <input name="Search" type="search" placeholder="Click enter after typing..." />
                                        </form>
                                    </div>
                                </div>
                                {/* <!-- //search --> */}

                                <div className="clearfix"></div>
                            </div>
                            {/* <!-- /slider --> */}
                            <div className="slider">
                                <div className="callbacks_container">
                                    <ul className="rslides callbacks callbacks1" id="slider4">

                                        <li>
                                            <div className="banner-top2">
                                                <div className="banner-info-wthree">
                                                    <h3>Nike</h3>
                                                    <p>See how good they feel.</p>

                                                </div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner-top3">
                                                <div className="banner-info-wthree">
                                                    <h3>Heels</h3>
                                                    <p>For All Walks of Life.</p>

                                                </div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner-top">
                                                <div className="banner-info-wthree">
                                                    <h3>Sneakers</h3>
                                                    <p>See how good they feel.</p>

                                                </div>

                                            </div>
                                        </li>
                                        <li>
                                            <div className="banner-top1">
                                                <div className="banner-info-wthree">
                                                    <h3>Adidas</h3>
                                                    <p>For All Walks of Life.</p>

                                                </div>

                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            {/* <!-- //slider --> */}
                            <ul className="top_icons">
                                <li><a href="#"><span className="fa fa-facebook" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span className="fa fa-twitter" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span className="fa fa-linkedin" aria-hidden="true"></span></a></li>
                                <li><a href="#"><span className="fa fa-google-plus" aria-hidden="true"></span></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </Router>

        );
    }
}
export default Banner;