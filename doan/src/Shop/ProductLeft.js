import React, { Component } from 'react';
import ProductRight from './ProductRight';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newletter from '../Footer/Newletter';
import Mid from '../Index/Mid_slider';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class ProductLeft extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="side-bar col-md-3">
                            <div className="search-hotel">
                                <h3 className="agileits-sear-head">Tìm kiếm..</h3>
                                <form action="#" method="post">
                                    <input type="search" placeholder="Tên sản phẩm..." name="search" required="" />
                                    <input type="submit" value=" " />
                                </form>
                            </div>
                            {/* <!-- price range --> */}


                            {/* <!-- //price range -->
				<!--preference --> */}

                            {/* <!-- // preference -->
				<!-- discounts --> */}
                            <div className="left-side">
                                <h3 className="agileits-sear-head">Khuyến mãi</h3>
                                <ul>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">5% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">10% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">20% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">30% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">50% or More</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" className="checked" />
                                        <span className="span">60% or More</span>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- //discounts -->
				<!-- reviews --> */}
                            <div className="customer-rev left-side">
                                <h3 className="agileits-sear-head">Đánh giá khách hàng</h3>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <span>5.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>4.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>3.5</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>3.0</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                            <span>2.5</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- //reviews -->
				<!-- deals --> */}
                            <div className="deal-leftmk left-side">
                                <h3 className="agileits-sear-head">Special Deals</h3>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="assets/images/s4.jpg" alt="" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Shuberry Heels</h3>
                                        <a href="/Single">$180.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="./assets/images/s2.jpg" alt="" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Chikku Loafers</h3>
                                        <a href="/Single">$99.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="./assets/images/s1.jpg" alt="" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Bella Toes</h3>
                                        <a href="/Single">$165.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="assets/images/s5.jpg" alt="" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>Red Bellies</h3>
                                        <a href="/Single">$225.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="special-sec1">
                                    <div className="col-xs-4 img-deals">
                                        <img src="assets/images/s3.jpg" alt="" />
                                    </div>
                                    <div className="col-xs-8 img-deal1">
                                        <h3>(SRV) Sneakers</h3>
                                        <a href="/Single">$169.00</a>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            {/* <!-- //deals --> */}

                        </div>
                        <ProductRight />

                    </div>
                    <div className="clearfix"></div>
                </div>
                <div>


                </div>
                <Mid />
                <Newletter />
                <Footer />
            </div>


        );
    }
}
export default ProductLeft;