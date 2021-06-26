import React, { Component } from 'react';
import PriceProduct from './PriceProduct';
import Tabs from './Tabs';
import NewArrivals from './NewArrivals';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newletter from '../Footer/Newletter';
import Mid from '../Index/Mid_slider';

class DetailProduct extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="col-md-4 single-right-left ">
                            <div className="grid images_3_of_2">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li data-thumb="./assets/images/d2.jpg">
                                        </li>
                                        <div className="thumb-image"> <img src="./assets/images/d1.jpg" data-imagezoom="true" className="img-responsive" /> </div>

                                        {/* <li data-thumb="./assets/images/d1.jpg">
                                        </li>
                                        <div className="thumb-image"> <img src="./assets/images/d2.jpg" data-imagezoom="true" className="img-responsive" /> </div>

                                        <li data-thumb="./assets/images/d3.jpg">
                                        </li>
                                        <div className="thumb-image"> <img src="./assets/images/d3.jpg" data-imagezoom="true" className="img-responsive" /> </div> */}

                                    </ul>
                                    <div className="clearfix" />
                                </div>

                            </div>
                            <div className="clearfix"> </div>

                        </div>
                        <PriceProduct />
                        {/* <Tabs /> */}
                        <NewArrivals />
                        <Tabs />
                    </div>
                </div>
                <Mid />
                <Newletter />
                <Footer />
            </div>
        );
    }
}
export default DetailProduct;