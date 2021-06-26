import React, { Component } from 'react';
class ProductRight extends Component {
    render() {
        return (
            <div className="App" >
                <div className="left-ads-display col-md-9">
                    <div className="wrapper_top_shop">
                        <div className="col-md-6 shop_left">
                            <img src="assets/images/banner3.jpg" alt="" />
                            <h6>40% off</h6>
                        </div>
                        <div className="col-md-6 shop_right">
                            <img src="assets/images/banner2.jpg" alt="" />
                            <h6>50% off</h6>
                        </div>
                        <div className="clearfix"></div>
                        {/* <!-- product-sec1 --> */}
                        <div className="product-sec1">
                            {/* <!--/mens--> */}
                            <div className="col-md-4 product-men">
                                <div className="product-shoe-info shoe">
                                    <div className="men-pro-item">
                                        <div className="men-thumb-item">
                                            <img src="assets/images/s1.jpg" alt="" />
                                            <div className="men-cart-pro">
                                                <div className="inner-men-cart-pro">
                                                    <a href="/Single" className="link-product-add-cart">Quick View</a>
                                                </div>
                                            </div>
                                            <span className="product-new-top">New</span>
                                        </div>
                                        <div className="item-info-product">
                                            <h4>
                                                <a href="/Single">Bella Toes </a>
                                            </h4>
                                            <div className="info-product-price">
                                                <div className="grid_meta">
                                                    <div className="product_price">
                                                        <div className="grid-price ">
                                                            <span className="money ">$675.00</span>
                                                        </div>
                                                    </div>
                                                    <ul className="stars">
                                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star-half-o" aria-hidden="true"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-star-o" aria-hidden="true"></i></a></li>
                                                    </ul>
                                                </div>
                                                <div className="shoe single-item hvr-outline-out">
                                                    <form action="#" method="post">
                                                        <input type="hidden" name="cmd" value="_cart" />
                                                        <input type="hidden" name="add" value="1" />
                                                        <input type="hidden" name="shoe_item" value="Bella Toes" />
                                                        <input type="hidden" name="amount" value="675.00" />
                                                        <button type="submit" className="shoe-cart pshoe-cart"><i className="fa fa-cart-plus" aria-hidden="true"></i></button>

                                                        <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                                    </form>

                                                </div>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* <!-- //mens -->
						<!-- /womens --> */}


                            {/* <!-- //womens -->
						<!-- /mens --> */}



                            {/* <!-- //mens --> */}
                            <div className="clearfix"></div>

                        </div>

                        {/* <!-- //product-sec1 --> */}
                        <div className="col-md-6 shop_left shp">
                            <img src="assets/images/banner4.jpg" alt="" />
                            <h6>21% off</h6>
                        </div>
                        <div className="col-md-6 shop_right shp">
                            <img src="assets/images/banner1.jpg" alt="" />
                            <h6>31% off</h6>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ProductRight;