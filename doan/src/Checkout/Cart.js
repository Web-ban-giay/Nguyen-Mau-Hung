import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Newletter from '../Footer/Newletter';
import Total from '../Checkout/Total';
import Infomation from '../Checkout/Infomation';
import Mid from '../Index/Mid_slider';
class Cart extends Component {
    render() {
        return (

            <div className="App">
                <Header />
                <div className="ads-grid_shop">
                    <div className="shop_inner_inf">
                        <div className="privacy about">
                            <h3>Giỏ <span>hàng</span></h3>
                            <div className="checkout-right">
                                <h4>Tổng sản phẩm: <span>3 Products</span></h4>
                                <table className="timetable_sub">
                                    <thead>
                                        <tr>
                                            <th>STT.</th>
                                            <th>Sản phẩm</th>
                                            <th>Số lượng</th>
                                            <th>Tên sản phẩm</th>

                                            <th>Giá</th>
                                            <th>Xóa sản phẩm</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="rem1">
                                            <td className="invert">1</td>
                                            <td classn="invert-image"><a href="/Single"><img src="assets/images/s1.jpg" alt=" " className="img-responsive" /></a></td>
                                            <td className="invert">
                                                <div className="quantity">
                                                    <div className="quantity-select">
                                                        <div className="entry value-minus">&nbsp;</div>
                                                        <div className="entry value"><span>1</span></div>
                                                        <div className="entry value-plus active">&nbsp;</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invert">Bella Toes</td>

                                            <td className="invert">$675.00</td>
                                            <td className="invert">
                                                <div className="rem">
                                                    <div className="close1"> </div>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr className="rem2">
                                            <td className="invert">2</td>
                                            <td className="invert-image"><a href="/Single"><img src="assets/images/s5.jpg" alt=" " className="img-responsive" /></a></td>
                                            <td className="invert">
                                                <div className="quantity">
                                                    <div className="quantity-select">
                                                        <div className="entry value-minus">&nbsp;</div>
                                                        <div className="entry value"><span>1</span></div>
                                                        <div className="entry value-plus active">&nbsp;</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invert">Red Bellies</td>

                                            <td className="invert">$325.00</td>
                                            <td className="invert">
                                                <div className="rem">
                                                    <div className="close2"> </div>
                                                </div>

                                            </td>
                                        </tr>
                                        <tr className="rem3">
                                            <td className="invert">3</td>
                                            <td className="invert-image"><a href="/Single"><img src="assets/images/s2.jpg" alt=" " className="img-responsive" /></a></td>
                                            <td className="invert">
                                                <div className="quantity">
                                                    <div className="quantity-select">
                                                        <div className="entry value-minus">&nbsp;</div>
                                                        <div className="entry value"><span>1</span></div>
                                                        <div className="entry value-plus active">&nbsp;</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="invert">Chikku Loafers</td>

                                            <td className="invert">$405.00</td>
                                            <td className="invert">
                                                <div className="rem">
                                                    <div className="close3"> </div>
                                                </div>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <Total />
                    <Infomation />
                    <div className="clearfix"></div>
                </div>
                <Mid />
                <Newletter />



                <Footer />

            </div>

        );
    }
}
export default Cart;