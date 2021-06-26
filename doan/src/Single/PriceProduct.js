import React, { Component } from 'react';
class PriceProduct extends Component {
    render() {
        return (
            <div className="App">
                <div className="col-md-8 single-right-left simpleCart_shelfItem">
                    <h3>Shoe Rock Vision(SRV) Sneakers (Blue)</h3>
                    <p><span className="item_price">$650</span>
                        <del>$1,199</del>
                    </p>
                    <div className="rating1">
                        <ul className="stars">
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                            <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="description">
                        <h5>Kiểm tra giao hàng, tùy chọn thanh toán và các khoản phí tại địa điểm của bạn </h5>
                        <form action="#" method="post">
                            <input type="text" value="Enter pincode" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter pincode';}"
                                required="" />
                            <input type="submit" value="Kiểm tra" />
                        </form>
                    </div>
                    <div className="color-quality">
                        <div className="color-quality-right">
                            <h5>Số lượng :</h5>
                            <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                                <option value="null"></option>
                                <option value="null">6</option>
                                <option value="null">7</option>
                                <option value="null">10 </option>
                            </select>
                        </div>
                    </div>
                    <div className="occasional">
                        <h5>Các loại :</h5>
                        <div className="colr ert">
                            <label className="radio"><input type="radio" name="radio" checked="" /><i></i>Casual Shoes</label>
                        </div>
                        <div className="colr">
                            <label className="radio"><input type="radio" name="radio" /><i></i>Sneakers </label>
                        </div>
                        <div className="colr">
                            <label className="radio"><input type="radio" name="radio" /><i></i>Formal Shoes</label>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="occasion-cart">
                        <div className="shoe single-item single_page_b">
                            <form action="#" method="post">
                                <input type="hidden" name="cmd" value="_cart" />
                                <input type="hidden" name="add" value="1" />
                                <input type="hidden" name="shoe_item" value="Chikku Loafers" />
                                <input type="hidden" name="amount" value="405.00" />
                                {/* <input type="submit" name="submit" value="Add to cart" className="button add" /> */}
                                <div className="shop-button">
                                    <a href="/Checkout">Thêm giỏ hàng</a>
                                </div>

                                <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                            </form>

                        </div>

                    </div>
                    <ul className="social-nav model-3d-0 footer-social social single_page">
                        <li className="share">Chia sẽ : </li>
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
                        <li>
                            <a href="#" className="pinterest">
                                <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                                <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
                            </a>
                        </li>
                    </ul>
                    <div className="clearfix"> </div>

                </div>

            </div>

        );
    }
}
export default PriceProduct;